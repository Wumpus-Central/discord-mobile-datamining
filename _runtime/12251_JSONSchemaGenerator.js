// === Module 12251: JSONSchemaGenerator ===

// Module 12251 (JSONSchemaGenerator)
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const JSONSchemaGenerator = require;
let closure_4 = ["~standard"];
class JSONSchemaGenerator {
  constructor(arg0) {
    tmp = outer1_3(this, JSONSchemaGenerator);
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
    obj = { processors: null, target: null };
    obj[0] = require("stringProcessor").allProcessors;
    obj[1] = str;
    metadata = undefined;
    if (global != null) {
      metadata = global.metadata;
    }
    if (metadata) {
      obj = { metadata: null };
      obj[0] = global.metadata;
      metadata = obj;
    }
    merged = Object.assign(metadata);
    unrepresentable = undefined;
    if (global != null) {
      unrepresentable = global.unrepresentable;
    }
    if (unrepresentable) {
      obj1 = { unrepresentable: null };
      obj1[0] = global.unrepresentable;
      unrepresentable = obj1;
    }
    merged1 = Object.assign(unrepresentable);
    override = undefined;
    if (global != null) {
      override = global.override;
    }
    if (override) {
      obj2 = { override: null };
      obj2[0] = global.override;
      override = obj2;
    }
    merged2 = Object.assign(override);
    io = undefined;
    if (global != null) {
      io = global.io;
    }
    if (io) {
      obj3 = { io: null };
      obj3[0] = global.io;
      io = obj3;
    }
    merged3 = Object.assign(io);
    this.ctx = require("initializeContext").initializeContext(obj);
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
    value: function process(arg0) {
      let tmp = arg1;
      if (arg1 === undefined) {
        const obj = { path: null, schemaPath: null };
        obj[0] = [];
        obj[1] = [];
        tmp = obj;
      }
      return JSONSchemaGenerator(12249).process(arg0, this.ctx, tmp);
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
      JSONSchemaGenerator(12249).extractDefs(self.ctx, _idmap);
      return _objectWithoutProperties(JSONSchemaGenerator(12249).finalize(self.ctx, _idmap), closure_4);
    }
  }
];

export const JSONSchemaGenerator = _createClass(JSONSchemaGenerator, items);