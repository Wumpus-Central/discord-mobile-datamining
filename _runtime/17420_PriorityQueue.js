// _runtime/17420_PriorityQueue.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const PriorityQueue = require;
class PriorityQueue {
  constructor() {
    tmp = c2(this, PriorityQueue);
    this._queue = [];
    return;
  }
}
const entry = {
  key: "enqueue",
  value: function enqueue(run, arg1) {
    const self = this;
    const obj = { priority: null, run: null };
    const merged = Object.assign({ priority: 0 }, arg1);
    obj.priority = merged.priority;
    obj.run = run;
    if (this.size) {
      if (self._queue[self.size - 1].priority >= merged.priority) {
        const _queue = self._queue;
        _queue.push(obj);
      }
    }
    const _queue1 = self._queue;
    _queue1.splice(
      PriorityQueue(17421).default(self._queue, obj, (priority, priority2) => priority2.priority - priority.priority),
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
