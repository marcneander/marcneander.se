/* eslint-disable import/prefer-default-export */

/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
export function omit(obj, omitKeys) {
    const result = {};
    Object.keys(obj).forEach(key => {
        if (omitKeys.indexOf(key) === -1) {
            result[key] = obj[key];
        }
    });
    return result;
}
