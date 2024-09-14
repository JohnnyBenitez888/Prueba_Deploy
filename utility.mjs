const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
}
const _add = add;
export { _add as add };
const _subtract = subtract;
export { _subtract as subtract };