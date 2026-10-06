// _runtime/metro/17596__.js
import lowerBound from "../17597_lowerBound.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

class PriorityQueue {
  constructor() {
    _classCallCheck(this, PriorityQueue);
    this._queue = [];
  }
}
const entry = {
  key: "enqueue",
  value: function enqueue(run, arg1) {
    let merged;
    const self = this;
    const obj = { priority: merged.priority, run };
    merged = Object.assign({ priority: 0 }, arg1);
    if (this.size) {
      if (self._queue[self.size - 1].priority >= merged.priority) {
        const _queue = self._queue;
        _queue.push(obj);
      }
    }
    const _queue1 = self._queue;
    const obj2 = lowerBound;
    _queue1.splice(
      obj2.default(self._queue, obj, (priority, priority2) => priority2.priority - priority.priority),
      0,
      obj,
    );
  },
};
const items = [
  entry,
  {
    key: "dequeue",
    value: function dequeue() {
      const _queue = this._queue;
      const arr = _queue.shift();
      let run;
      if (null != arr) {
        run = arr.run;
      }
      return run;
    },
  },
  {
    key: "filter",
    value: function filter(arg0) {
      const priority = arg0;
      const _queue = this._queue;
      const found = _queue.filter((priority) => priority.priority === priority.priority);
      return found.map((run) => run.run);
    },
  },
  {
    key: "size",
    get() {
      return this._queue.length;
    },
  },
];

export default _createClass(PriorityQueue, items);
