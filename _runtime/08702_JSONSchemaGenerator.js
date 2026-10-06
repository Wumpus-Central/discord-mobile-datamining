// === Module 8702: JSONSchemaGenerator ===

// Module 8702 (JSONSchemaGenerator)
import _mod8700 from "module_8700" /* 8700 */;
import stringProcessor from "stringProcessor" /* 8701 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let closure_4 = ["~standard"];
class JSONSchemaGenerator {
  constructor(target) {
    _classCallCheck(this, JSONSchemaGenerator);
    let str;
    if (target != null) {
      str = target.target;
    }
    if (str == null) {
      str = "draft-2020-12";
    }
    if ("draft-4" === str) {
      str = "draft-04";
    }
    if ("draft-7" === str) {
      str = "draft-07";
    }
    const obj = { processors: stringProcessor.allProcessors, target: str };
    const initializeContext = _mod8700.initializeContext;
    let metadata;
    if (target != null) {
      metadata = target.metadata;
    }
    if (metadata) {
      metadata = { metadata: target.metadata };
      const obj2 = { metadata: target.metadata };
    }
    const merged = Object.assign(metadata);
    let unrepresentable;
    if (target != null) {
      unrepresentable = target.unrepresentable;
    }
    if (unrepresentable) {
      unrepresentable = { unrepresentable: target.unrepresentable };
      const obj3 = { unrepresentable: target.unrepresentable };
    }
    const merged1 = Object.assign(unrepresentable);
    let override;
    if (target != null) {
      override = target.override;
    }
    if (override) {
      override = { override: target.override };
      const obj4 = { override: target.override };
    }
    const merged2 = Object.assign(override);
    let io;
    if (target != null) {
      io = target.io;
    }
    if (io) {
      io = { io: target.io };
      const obj5 = { io: target.io };
    }
    const merged3 = Object.assign(io);
    this.ctx = initializeContext(obj);
  }
}
let obj = {
  key: "metadataRegistry",
  get() {
    return this.ctx.metadataRegistry;
  }
};
const items = [
  obj,
  {
    key: "target",
    get() {
      return this.ctx.target;
    }
  },
  {
    key: "unrepresentable",
    get() {
      return this.ctx.unrepresentable;
    }
  },
  {
    key: "override",
    get() {
      return this.ctx.override;
    }
  },
  {
    key: "io",
    get() {
      return this.ctx.io;
    }
  },
  {
    key: "counter",
    get() {
      return this.ctx.counter;
    },
    set(counter) {
      this.ctx.counter = counter;
    }
  },
  {
    key: "seen",
    get() {
      return this.ctx.seen;
    }
  },
  {
    key: "process",
    value: function process(arg0) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = { path: [], schemaPath: [] };
        const obj = { path: [], schemaPath: [] };
      }
      return _mod8700.process(arg0, this.ctx, tmp);
    }
  },
  {
    key: "emit",
    value: function emit(_idmap, cycles) {
      const self = this;
      const tmp = cycles;
      if (tmp) {
        if (cycles.cycles) {
          self.ctx.cycles = cycles.cycles;
        }
        if (cycles.reused) {
          self.ctx.reused = cycles.reused;
        }
        if (cycles.external) {
          self.ctx.external = cycles.external;
        }
      }
      _mod8700.extractDefs(self.ctx, _idmap);
      const finalizeResult = _mod8700.finalize(self.ctx, _idmap);
      return _objectWithoutProperties(finalizeResult, closure_4);
    }
  }
];
const JSONSchemaGenerator_export = _createClass(JSONSchemaGenerator, items);

export { JSONSchemaGenerator_export as JSONSchemaGenerator };