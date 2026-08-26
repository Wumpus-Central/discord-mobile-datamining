// === Module 16845: PriorityQueue ===

// Module 16845 (PriorityQueue)
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const PriorityQueue = require;
class PriorityQueue {
  constructor() {
    tmp = closure_2(this, PriorityQueue);
    this._queue = [];
    return;
  }
}
const items = [
  {
    key: "enqueue",
    value: function enqueue(arg0, arg1) {
      const self = this;
      const obj = { priority: null, run: null };
      const merged = Object.assign({ priority: 0 }, arg1);
      obj[0] = merged.priority;
      obj[1] = arg0;
      if (this.size) {
        if (self._queue[self.size - 1].priority >= merged.priority) {
          const _queue = self._queue;
          _queue.push(obj);
        }
      }
      const _queue1 = self._queue;
      _queue1.splice(PriorityQueue(16846).default(self._queue, obj, (priority, priority2) => priority2.priority - priority.priority), 0, obj);
    }
  },
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
    }
  },
  {
    key: "filter",
    value: function filter(arg0) {
      closure_0 = arg0;
      const _queue = this._queue;
      const found = _queue.filter((priority) => priority.priority === priority.priority);
      return found.map((run) => run.run);
    }
  },
  {
    key: "size",
    get() {
      return this._queue.length;
    }
  }
];

export default _createClass(PriorityQueue, items);