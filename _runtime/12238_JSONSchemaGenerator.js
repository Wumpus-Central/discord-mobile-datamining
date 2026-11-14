// === Module 12238: JSONSchemaGenerator ===

// Module 12238 (JSONSchemaGenerator)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const JSONSchemaGenerator = require;
let closure_5 = ["~standard"];
class JSONSchemaGenerator {
  constructor(arg0) {
    tmp = closure_4(this, JSONSchemaGenerator);
    str = undefined;
    if (global != null) {
      str = global.target;
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
    obj = { processors: closure_0(c2[4]).allProcessors, target: str };
    metadata = undefined;
    if (global != null) {
      metadata = global.metadata;
    }
    if (metadata) {
      obj1 = { metadata: null };
      obj1.metadata = global.metadata;
      metadata = obj1;
    }
    merged = Object.assign(metadata);
    unrepresentable = undefined;
    if (global != null) {
      unrepresentable = global.unrepresentable;
    }
    if (unrepresentable) {
      obj6 = { unrepresentable: null };
      obj6.unrepresentable = global.unrepresentable;
      unrepresentable = obj6;
    }
    merged1 = Object.assign(unrepresentable);
    override = undefined;
    if (global != null) {
      override = global.override;
    }
    if (override) {
      obj7 = { override: null };
      obj7.override = global.override;
      override = obj7;
    }
    merged2 = Object.assign(override);
    io = undefined;
    if (global != null) {
      io = global.io;
    }
    if (io) {
      obj8 = { io: null };
      obj8.io = global.io;
      io = obj8;
    }
    merged3 = Object.assign(io);
    this.ctx = closure_0(c2[3]).initializeContext(obj);
    return;
  }
}
const items = [
  {
    key: "metadataRegistry",
    get() {
      return this.ctx.metadataRegistry;
    }
  },
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
    value: function process(innerType) {
      let tmp = path;
      if (path === undefined) {
        const obj = { path: [], schemaPath: [] };
        tmp = obj;
      }
      return JSONSchemaGenerator(12236).processSchema(innerType, this.ctx, tmp);
    }
  },
  {
    key: "emit",
    value: function emit(_idmap, cycles) {
      const self = this;
      if (cycles) {
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
      self.ctx.sharedDefsExtractedFor = undefined;
      self.ctx.sharedEmitDoneFor = undefined;
      JSONSchemaGenerator(12236).extractDefs(self.ctx, _idmap);
      return _objectWithoutProperties(JSONSchemaGenerator(12236).finalize(self.ctx, _idmap), closure_5);
    }
  }
];
(() => {
  let tmp = exports;
  const ownPropertyNames = Object.getOwnPropertyNames(exports);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    const _Object = Object;
    const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
    if (ownPropertyDescriptor) {
      if (ownPropertyDescriptor.get) {
        if (ownPropertyDescriptor.configurable) {
          try {
            value = ownPropertyDescriptor.get();
            if (undefined !== value) {
              const _Object2 = Object;
              const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
              Object.defineProperty(exports, ownPropertyNames[num], obj);
            }
          } catch (err) {
          }
        }
      }
    }
    num = num + 1;
    tmp = exports;
  }
  const frozen = Object.freeze(tmp);
})();

export const JSONSchemaGenerator = _createClass(JSONSchemaGenerator, items);