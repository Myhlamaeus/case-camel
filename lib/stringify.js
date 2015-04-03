export default function stringify(val) {
    if(typeof(val) === "undefined" || val === null) {
        return "";
    }

    if(Array.isArray(val)) {
        return val.map(stringify).join("");
    }

    val = String(val);

    return val.charAt(0).toUpperCase() + val.slice(1);
}
