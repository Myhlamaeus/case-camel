function toLowerCase(str) {
    return str.toLowerCase();
}

function parse(str) {
    var chrs = str.split(""),
        chrsLowerCase = str.toLowerCase().split(""),
        start = 0,
        ret = [],
        lastUpper, i, length;

    if(chrs[0] !== chrsLowerCase[0]) {
        lastUpper = 0;
    }

    for(i = 1, length = chrs.length; i < length; ++i) {
        if(chrs[i] === chrsLowerCase[i]) {
            if(lastUpper && lastUpper !== start) {
                ret.push(chrs.slice(start, lastUpper).join(""));
                start = lastUpper;
            }
        } else {
            if(lastUpper !== i - 1) {
                ret.push(chrs.slice(start, i).join(""));
                start = i;
            }
            lastUpper = i;
        }
    }
    ret.push(chrs.slice(start).join(""));

    return ret;
}

module.exports = {
    parse: function(val) {
        return this.parseSameCase(val).map(toLowerCase);
    },
    parseSameCase: function(val) {
        if(typeof(val) === "undefined" || val === null) {
            return [];
        }

        val = String(val);

        if(val.length < 2) {
            return [val];
        }

        return parse(val);
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
        return typeof(val) !== "undefined" && val !== null;
    }
};
