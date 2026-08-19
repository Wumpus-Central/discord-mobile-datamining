// === Module 656: DepGraph ===

// Module 656 (DepGraph)
class DepGraph {
  constructor(arg0) {
    tmp = arg0;
    if (arg0) {
      tmp = arg0.circular;
    }
    { nodes: {}, outgoingEdges: {}, incomingEdges: {} }.circular = tmp;
    return;
  }
}
arg5.DepGraph = DepGraph;
DepGraph.prototype = {
  size() {
    return Object.keys(this.nodes).length;
  },
  addNode(arg0, arg1) {
    const self = this;
    if (!this.hasNode(arg0)) {
      let tmp = arg0;
      if (2 === arguments.length) {
        tmp = arg1;
      }
      self.nodes[arg0] = tmp;
      self.outgoingEdges[arg0] = [];
      self.incomingEdges[arg0] = [];
    }
  },
  removeNode(arg0) {
    const self = this;
    closure_0 = arg0;
    if (this.hasNode(arg0)) {
      const nodes = self.nodes;
      delete tmp[tmp2];
      const outgoingEdges = self.outgoingEdges;
      delete tmp[tmp2];
      const incomingEdges = self.incomingEdges;
      delete tmp[tmp2];
      const items = [, ];
      ({ incomingEdges: arr[0], outgoingEdges: arr[1] } = self);
      let item = items.forEach(function(item, index) {
        closure_0 = item;
        const keys = Object.keys(item);
        item = keys.forEach((item, index) => {
          index = item[item].indexOf(item);
          if (index >= 0) {
            item[item].splice(index, 1);
          }
        }, this);
      });
    }
  },
  hasNode(key10009) {
    const nodes = this.nodes;
    return nodes.hasOwnProperty(key10009);
  },
  getNodeData(prop) {
    if (this.hasNode(prop)) {
      return this.nodes[prop];
    } else {
      const _Error = Error;
      error = new Error("Node does not exist: " + prop);
      throw error;
    }
  },
  setNodeData(arg0, arg1) {
    if (this.hasNode(arg0)) {
      this.nodes[arg0] = arg1;
    } else {
      const _Error = Error;
      error = new Error("Node does not exist: " + arg0);
      throw error;
    }
  },
  addDependency(arg0, arg1) {
    const self = this;
    if (this.hasNode(arg0)) {
      if (self.hasNode(arg1)) {
        let arr = self.outgoingEdges[arg0];
        if (-1 === arr.indexOf(arg1)) {
          arr = self.outgoingEdges[arg0].push(arg1);
        }
        if (-1 === arr3.indexOf(arg0)) {
          arr = self.incomingEdges[arg1].push(arg0);
        }
        return true;
      } else {
        const _Error2 = Error;
        error = new Error("Node does not exist: " + arg1);
        throw error;
      }
    } else {
      const _Error = Error;
      const error1 = new Error("Node does not exist: " + arg0);
      throw error1;
    }
  },
  removeDependency(arg0, arg1) {
    const self = this;
    let hasNodeResult = this.hasNode(arg0);
    if (hasNodeResult) {
      const index = self.outgoingEdges[arg0].indexOf(arg1);
      hasNodeResult = index >= 0;
      let tmp2 = index;
    }
    if (hasNodeResult) {
      self.outgoingEdges[arg0].splice(tmp2, 1);
    }
    let hasNodeResult1 = self.hasNode(arg1);
    if (hasNodeResult1) {
      const index1 = self.incomingEdges[arg1].indexOf(arg0);
      hasNodeResult1 = index1 >= 0;
      tmp2 = index1;
    }
    if (hasNodeResult1) {
      self.incomingEdges[arg1].splice(tmp2, 1);
    }
  },
  clone() {
    const self = this;
    if (typeof self !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = { nodes: {}, outgoingEdges: {}, incomingEdges: {}, circular: undefined };
    const keys = Object.keys(this.nodes);
    const item = keys.forEach((item, index) => {
      obj.nodes[item] = self.nodes[item];
      obj.outgoingEdges[item] = self.outgoingEdges[item].slice(0);
      obj.incomingEdges[item] = self.incomingEdges[item].slice(0);
    });
    return obj;
  },
  dependenciesOf(item) {
    const self = this;
    if (this.hasNode(item)) {
      const items = [];
      const outgoingEdges = self.outgoingEdges;
      closure_1 = arg1;
      circular = self.circular;
      closure_4 = [];
      closure_5 = {};
      closure_6 = {};
      closure_7 = {};
      class DFS {
        constructor(arg0) {
          closure_5[item] = true;
          arr = closure_4.push(item);
          closure_7[item] = true;
          tmp4 = outgoingEdges;
          num = 0;
          if (0 < outgoingEdges[item].length) {
            while (true) {
              tmp5 = outgoingEdges;
              tmp6 = outgoingEdges[item][num];
              tmp7 = closure_5;
              tmp8 = num;
              if (closure_5[tmp6]) {
                tmp11 = closure_7;
                if (closure_7[tmp6]) {
                  obj = closure_4;
                  arr1 = closure_4.push(tmp6);
                  tmp13 = circular;
                  if (!circular) {
                    break;
                  }
                }
              } else {
                tmp9 = DFS;
                tmp10 = DFS(tmp6);
              }
              num = num + 1;
              tmp4 = tmp5;
            }
            tmp14 = closure_1;
            tmp15 = new.target;
            if (typeof closure_1 !== "function") {
              str3 = "Trying to call a non-function";
              throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            str = " -> ";
            str2 = "Dependency Cycle Found: ";
            tmp16 = globalThis;
            _Error = Error;
            tmp17 = new.target;
            tmp18 = new.target;
            error = new Error("Dependency Cycle Found: " + obj.join(" -> "));
            tmp20 = error;
            error.cyclePath = obj;
            _Object = Object;
            _Object2 = Object;
            setPrototypeOfResult = Object.setPrototypeOf(error, Object.getPrototypeOf(tmp15));
            _Error2 = Error;
            if (Error.captureStackTrace) {
              _Error3 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp14);
            }
            throw error;
          }
          arr2 = closure_4.pop();
          delete tmp2[tmp];
          tmp24 = closure_1;
          if (closure_1) {
            tmp24 = 0 !== tmp4[item].length;
          }
          if (!tmp24) {
            tmp25 = closure_6;
            tmp24 = closure_6[item];
          }
          if (!tmp24) {
            tmp26 = DFS;
            arr3 = DFS.push(item);
            tmp28 = closure_6;
            closure_6[item] = true;
          }
          return;
        }
      }
      DFS(item);
      const index = items.indexOf(item);
      if (index >= 0) {
        items.splice(index, 1);
      }
      return items;
    } else {
      const _Error = Error;
      error = new Error("Node does not exist: " + item);
      throw error;
    }
  },
  dependantsOf(item) {
    const self = this;
    if (this.hasNode(item)) {
      const items = [];
      const incomingEdges = self.incomingEdges;
      closure_1 = arg1;
      circular = self.circular;
      closure_4 = [];
      closure_5 = {};
      closure_6 = {};
      closure_7 = {};
      class DFS {
        constructor(arg0) {
          closure_5[item] = true;
          arr = closure_4.push(item);
          closure_7[item] = true;
          tmp4 = outgoingEdges;
          num = 0;
          if (0 < outgoingEdges[item].length) {
            while (true) {
              tmp5 = outgoingEdges;
              tmp6 = outgoingEdges[item][num];
              tmp7 = closure_5;
              tmp8 = num;
              if (closure_5[tmp6]) {
                tmp11 = closure_7;
                if (closure_7[tmp6]) {
                  obj = closure_4;
                  arr1 = closure_4.push(tmp6);
                  tmp13 = circular;
                  if (!circular) {
                    break;
                  }
                }
              } else {
                tmp9 = DFS;
                tmp10 = DFS(tmp6);
              }
              num = num + 1;
              tmp4 = tmp5;
            }
            tmp14 = closure_1;
            tmp15 = new.target;
            if (typeof closure_1 !== "function") {
              str3 = "Trying to call a non-function";
              throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            str = " -> ";
            str2 = "Dependency Cycle Found: ";
            tmp16 = globalThis;
            _Error = Error;
            tmp17 = new.target;
            tmp18 = new.target;
            error = new Error("Dependency Cycle Found: " + obj.join(" -> "));
            tmp20 = error;
            error.cyclePath = obj;
            _Object = Object;
            _Object2 = Object;
            setPrototypeOfResult = Object.setPrototypeOf(error, Object.getPrototypeOf(tmp15));
            _Error2 = Error;
            if (Error.captureStackTrace) {
              _Error3 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp14);
            }
            throw error;
          }
          arr2 = closure_4.pop();
          delete tmp2[tmp];
          tmp24 = closure_1;
          if (closure_1) {
            tmp24 = 0 !== tmp4[item].length;
          }
          if (!tmp24) {
            tmp25 = closure_6;
            tmp24 = closure_6[item];
          }
          if (!tmp24) {
            tmp26 = DFS;
            arr3 = DFS.push(item);
            tmp28 = closure_6;
            closure_6[item] = true;
          }
          return;
        }
      }
      DFS(item);
      const index = items.indexOf(item);
      if (index >= 0) {
        items.splice(index, 1);
      }
      return items;
    } else {
      const _Error = Error;
      error = new Error("Node does not exist: " + item);
      throw error;
    }
  },
  overallOrder(arg0) {
    const self = this;
    let outgoingEdges = this;
    const items = [];
    const keys = Object.keys(this.nodes);
    if (0 === keys.length) {
      return items;
    } else {
      outgoingEdges = self.outgoingEdges;
      closure_1 = false;
      let DFS = [];
      circular = self.circular;
      closure_4 = [];
      closure_5 = {};
      closure_6 = {};
      closure_7 = {};
      class DFS {
        constructor(arg0) {
          closure_5[arg0] = true;
          arr = closure_4.push(arg0);
          closure_7[arg0] = true;
          tmp4 = outgoingEdges;
          num = 0;
          if (0 < outgoingEdges[arg0].length) {
            while (true) {
              tmp5 = outgoingEdges;
              tmp6 = outgoingEdges[arg0][num];
              tmp7 = closure_5;
              tmp8 = num;
              if (closure_5[tmp6]) {
                tmp11 = closure_7;
                if (closure_7[tmp6]) {
                  obj = closure_4;
                  arr1 = closure_4.push(tmp6);
                  tmp13 = circular;
                  if (!circular) {
                    break;
                  }
                }
              } else {
                tmp9 = DFS;
                tmp10 = DFS(tmp6);
              }
              num = num + 1;
              tmp4 = tmp5;
            }
            tmp14 = closure_1;
            tmp15 = new.target;
            if (typeof closure_1 !== "function") {
              str3 = "Trying to call a non-function";
              throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            str = " -> ";
            str2 = "Dependency Cycle Found: ";
            tmp16 = globalThis;
            _Error = Error;
            tmp17 = new.target;
            tmp18 = new.target;
            error = new Error("Dependency Cycle Found: " + obj.join(" -> "));
            tmp20 = error;
            error.cyclePath = obj;
            _Object = Object;
            _Object2 = Object;
            setPrototypeOfResult = Object.setPrototypeOf(error, Object.getPrototypeOf(tmp15));
            _Error2 = Error;
            if (Error.captureStackTrace) {
              _Error3 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp14);
            }
            throw error;
          }
          arr2 = closure_4.pop();
          delete tmp2[tmp];
          tmp24 = closure_1;
          if (closure_1) {
            tmp24 = 0 !== tmp4[arg0].length;
          }
          if (!tmp24) {
            tmp25 = closure_6;
            tmp24 = closure_6[arg0];
          }
          if (!tmp24) {
            tmp26 = DFS;
            arr3 = DFS.push(arg0);
            tmp28 = closure_6;
            closure_6[arg0] = true;
          }
          return;
        }
      }
      const item = keys.forEach((item, index) => {
        callback(item);
      });
      outgoingEdges = self.outgoingEdges;
      closure_1 = arg0;
      DFS = items;
      circular = self.circular;
      closure_4 = [];
      closure_5 = {};
      closure_6 = {};
      closure_7 = {};
      class DFS {
        constructor(arg0) {
          closure_5[arg0] = true;
          arr = closure_4.push(arg0);
          closure_7[arg0] = true;
          tmp4 = outgoingEdges;
          num = 0;
          if (0 < outgoingEdges[arg0].length) {
            while (true) {
              tmp5 = outgoingEdges;
              tmp6 = outgoingEdges[arg0][num];
              tmp7 = closure_5;
              tmp8 = num;
              if (closure_5[tmp6]) {
                tmp11 = closure_7;
                if (closure_7[tmp6]) {
                  obj = closure_4;
                  arr1 = closure_4.push(tmp6);
                  tmp13 = circular;
                  if (!circular) {
                    break;
                  }
                }
              } else {
                tmp9 = DFS;
                tmp10 = DFS(tmp6);
              }
              num = num + 1;
              tmp4 = tmp5;
            }
            tmp14 = closure_1;
            tmp15 = new.target;
            if (typeof closure_1 !== "function") {
              str3 = "Trying to call a non-function";
              throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            str = " -> ";
            str2 = "Dependency Cycle Found: ";
            tmp16 = globalThis;
            _Error = Error;
            tmp17 = new.target;
            tmp18 = new.target;
            error = new Error("Dependency Cycle Found: " + obj.join(" -> "));
            tmp20 = error;
            error.cyclePath = obj;
            _Object = Object;
            _Object2 = Object;
            setPrototypeOfResult = Object.setPrototypeOf(error, Object.getPrototypeOf(tmp15));
            _Error2 = Error;
            if (Error.captureStackTrace) {
              _Error3 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp14);
            }
            throw error;
          }
          arr2 = closure_4.pop();
          delete tmp2[tmp];
          tmp24 = closure_1;
          if (closure_1) {
            tmp24 = 0 !== tmp4[arg0].length;
          }
          if (!tmp24) {
            tmp25 = closure_6;
            tmp24 = closure_6[arg0];
          }
          if (!tmp24) {
            tmp26 = DFS;
            arr3 = DFS.push(arg0);
            tmp28 = closure_6;
            closure_6[arg0] = true;
          }
          return;
        }
      }
      const found = keys.filter((item, index) => 0 === outgoingEdges.incomingEdges[item].length);
      const item1 = found.forEach((item, index) => {
        DFS(item);
      });
      return items;
    }
  }
};
class tmp {
  constructor(arg0) {
    error = new Error("Dependency Cycle Found: " + arg0.join(" -> "));
    error.cyclePath = arg0;
    setPrototypeOfResult = Object.setPrototypeOf(error, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
      _Error = Error;
      tmp3 = f19363;
      captureStackTraceResult = Error.captureStackTrace(error, f19363);
    }
    return error;
  }
}
arg5.DepGraphCycleError = tmp;
let circular = tmp;
tmp.prototype = Object.create(Error.prototype, { constructor: { value: Error, enumerable: false, writable: true, configurable: true } });
Object.setPrototypeOf(tmp, Error);