var regExpParse = /((?:^|[A-Z])[A-Z]*[^A-Z]*)/g,
    regExpIs = /[A-Z][a-z]/;

function toLowerCase(str) {
    return str.toLowerCase();
}

module.exports = {
    parse: function(val) {
        return this.parseSameCase(val).map(toLowerCase);
    },
    parseSameCase: function(val) {
        if(typeof(val) === "undefined" || val === null) {
            return [];
        }

        return String(val).match(regExpParse);
    },
    stringify: function(val) {
        if(typeof(val) === "undefined" || val === null) {
            return "";
        }

        if(Array.isArray(val)) {
            return val.map(this.stringify).join("");
        }

        val = String(val);

        return val.charAt(0).toUpperCase() + val.slice(1);
    },
    is: function(val) {
        return typeof(val) !== "undefined" && val !== null && regExpIs.test(String(val));
    }
};
