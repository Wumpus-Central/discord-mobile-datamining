// _runtime/00425_Position.js
class Position {
  constructor(arg0, arg1) {
    return;
  }
  destructor() {
    return;
  }
}
require("oneArgumentPooler").addPoolingTo(Position, require("oneArgumentPooler").twoArgumentPooler);

export default Position;