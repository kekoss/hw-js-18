function cloneObject(obj) {
    if (typeof obj !== "object" || obj === null) return obj;

    let clone = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        clone[key] = cloneObject(obj[key])
    }
    return clone
}
cloneObject();