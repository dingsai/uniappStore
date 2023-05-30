var antmove_export = {};

/* eslint-disable */
var REGEXP = getRegExp('^\d+(\.\d+)?$');

function addUnit(value) {
  if (value == null) {
    return undefined;
  }

  return REGEXP.test('' + value) ? value + 'px' : value;
}

antmove_export = {
  addUnit: addUnit
};
export default antmove_export;