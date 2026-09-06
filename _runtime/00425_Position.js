// _runtime/00425_Position.js
import oneArgumentPooler from "00426_oneArgumentPooler.js";

class Position {
  constructor(arg0, arg1) {
    return;
  }
  destructor() {
    return;
  }
}
oneArgumentPooler.addPoolingTo(Position, oneArgumentPooler.twoArgumentPooler);

export default Position;
