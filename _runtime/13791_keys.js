// === Module 13791: keys ===

// Module 13791 (keys)
import hasLoggerPlugin2 from "hasLoggerPlugin" /* 13793 */;
import hasStateResponsePlugin2 from "hasStateResponsePlugin" /* 13796 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import module_13792 from "module_13792" /* 13792 */;
import module_13794 from "module_13794" /* 13794 */;
import module_13795 from "module_13795" /* 13795 */;
import module_13797 from "module_13797" /* 13797 */;
import module_13798 from "module_13798" /* 13798 */;
import repl from "repl" /* 13799 */;
import serialize from "serialize" /* 13800 */;

const ReactotronImpl = require;
function emptyPromise() {
  return Promise.resolve("");
}
if (!module_13792) {
  const obj1 = { default: null };
  obj1[0] = module_13792;
  let tmp7 = obj1;
} else {
  tmp7 = module_13792;
}
module_13792 = tmp7;
let hasLoggerPlugin = _interopRequireWildcard(hasLoggerPlugin2);
if (!module_13794) {
  const obj2 = { default: null };
  obj2[0] = module_13794;
  let obj5 = obj2;
} else {
  obj5 = module_13794;
}
if (!module_13795) {
  const obj3 = { default: null };
  obj3[0] = module_13795;
  let obj7 = obj3;
} else {
  obj7 = module_13795;
}
const hasStateResponsePlugin = _interopRequireWildcard(hasStateResponsePlugin2);
if (!module_13797) {
  hasLoggerPlugin = { default: null };
  hasLoggerPlugin[0] = module_13797;
  let obj11 = hasLoggerPlugin;
} else {
  obj11 = module_13797;
}
if (!module_13798) {
  obj5 = { default: null };
  obj5[0] = module_13798;
  let obj13 = obj5;
} else {
  obj13 = module_13798;
}
if (!repl) {
  const obj6 = { default: null };
  obj6[0] = repl;
  let obj15 = obj6;
} else {
  obj15 = repl;
}
if (!serialize) {
  obj7 = { default: null };
  obj7[0] = serialize;
  let tmp14 = obj7;
} else {
  tmp14 = serialize;
}
serialize = tmp14;
const items = [obj5.default(), hasLoggerPlugin.default(), obj7.default(), hasStateResponsePlugin.default(), obj11.default(), obj13.default(), obj15.default()];
let closure_9 = ["configure", "connect", "connected", "options", "plugins", "send", "socket", "startTimer", "use"];
class ReactotronImpl {
  constructor() {
    self = this;
    tmp = closure_2(this, self);
    this.connected = false;
    this.socket = null;
    this.plugins = [];
    this.sendQueue = [];
    this.isReady = false;
    date = new Date();
    this.lastMessageDate = date;
    this.customCommands = [];
    this.customCommandLatestId = 1;
    this.startTimer = () => self(table[11]).start();
    this.send = (type, payload, important) => {
      const date = new Date();
      const lastMessageDate = self.lastMessageDate;
      const time = date.getTime();
      let num = time - lastMessageDate.getTime();
      if (num < 0) {
        num = 0;
      }
      self.lastMessageDate = date;
      const defaultResult = serialize.default({ type, payload, important, date: date.toISOString(), deltaTime: num }, self.options.proxyHack);
      if (self.isReady) {
        try {
          const socket = self.socket;
          socket.send(defaultResult);
        } catch (err) {
          tmp2.isReady = false;
          const _console = tmp.console;
          _console.log("An error occurred communicating with reactotron. Please reload your app");
        }
      } else {
        const sendQueue = self.sendQueue;
        sendQueue.push(defaultResult);
      }
      const obj = { type, payload, important, date: date.toISOString(), deltaTime: num };
    };
    return;
  }
}
const items1 = [
  {
    key: "configure",
    value: function configure(arg0) {
      const self = this;
      const merged = Object.assign({
        createSocket: null,
        host: "localhost",
        port: 9090,
        name: "reactotron-core-client",
        secure: false,
        plugins: items,
        safeRecursion: true,
        onCommand() {
          return null;
        },
        onConnect() {
          return null;
        },
        onDisconnect() {
          return null;
        }
      }, this.options, arg0);
      module_13792.default(merged);
      this.options = merged;
      if (Array.isArray(this.options.plugins)) {
        const plugins = self.options.plugins;
        const item = plugins.forEach((item, index) => self.use(item));
      }
      return self;
    }
  },
  {
    key: "close",
    value: function close() {
      const self = this;
      this.connected = false;
      if (tmp) {
        const socket = self.socket;
        socket.close();
      }
    }
  },
  {
    key: "connect",
    value: function connect() {
      const self = this;
      this.connected = true;
      let options = this.options;
      ({ host, environment: dependencyMap, port, name: _classCallCheck, client } = options);
      ({ createSocket, secure } = options);
      if (undefined === client) {
        client = {};
      }
      const getClientId = options.getClientId;
      ({ onCommand: hasStateResponsePlugin, onConnect: serialize, onDisconnect: _interopRequireWildcard } = self.options);
      let str = "ws";
      if (secure) {
        str = "wss";
      }
      let socket = createSocket("" + str + "://" + host + ":" + port);
      function onOpen() {
        if (closure_6) {
          tmp();
        }
        const plugins = self.plugins;
        const item = plugins.forEach((item, index) => item.onConnect && item.onConnect());
        let tmp4 = getClientId;
        if (!getClientId) {
          tmp4 = emptyPromise;
        }
        tmp4(closure_2).then((result) => {
          let length;
          closure_8.isReady = true;
          const obj = { environment: closure_1 };
          const merged = Object.assign(closure_3);
          obj.name = closure_2;
          obj.clientId = result;
          obj.reactotronCoreClientVersion = "REACTOTRON_CORE_CLIENT_VERSION";
          closure_8.send("client.intro", obj);
          if (closure_8.sendQueue.length > 0) {
            do {
              let sendQueue = closure_8.sendQueue;
              closure_8.sendQueue = sendQueue.slice(1);
              let socket = closure_8.socket;
              let sendResult1 = socket.send(closure_8.sendQueue[0]);
              length = closure_8.sendQueue.length;
            } while (length > 0);
          }
        });
      }
      function onClose() {
        self.isReady = false;
        if (closure_7) {
          tmp2();
        }
        const plugins = self.plugins;
        const item = plugins.forEach((item, index) => item.onDisconnect && item.onDisconnect());
      }
      function onMessage(str) {
        if (typeof str === "string") {
          const _JSON2 = JSON;
          let action = JSON.parse(str);
        } else {
          const _Buffer = Buffer;
          action = str;
          if (Buffer.isBuffer(str)) {
            const _JSON = JSON;
            action = JSON.parse(str.toString());
          }
        }
        if (closure_5) {
          tmp2(action);
        }
        const plugins = self.plugins;
        const item = plugins.forEach((item, index) => {
          let onCommand = item.onCommand;
          if (onCommand) {
            onCommand = item.onCommand(action);
          }
          return onCommand;
        });
        if ("custom" === action.type) {
          const customCommands = self.customCommands;
          const found = customCommands.filter((item, index) => {
            if (typeof action.payload === "string") {
              let tmp2 = item.command === action.payload;
            } else {
              tmp2 = item.command === action.payload.command;
            }
            return tmp2;
          });
          const item1 = found.forEach((item, index) => {
            let args;
            if (typeof action.payload === "object") {
              args = action.payload.args;
            }
            return item.handler(args);
          });
        } else {
          if (tmp6) {
            const options = self.options;
            options.setClientId(action.payload);
          }
          tmp6 = "setClientId" === action.type && self.options.setClientId;
        }
      }
      if ("on" in socket) {
        if (socket.on) {
          socket.on("open", onOpen);
          socket.on("close", onClose);
          socket.on("message", onMessage);
          self.socket = socket;
        }
        return self;
      }
      socket.onopen = onOpen;
      socket.onclose = onClose;
      socket.onmessage = (data) => {
        onMessage(data.data);
      };
      self.socket = socket;
    }
  },
  {
    key: "display",
    value: function display(activity) {
      ({ value, preview, image, important } = activity);
      let tmp = undefined !== important;
      if (tmp) {
        tmp = important;
      }
      const obj = { name: activity.name, value, preview, image };
      this.send("display", obj, tmp);
    }
  },
  {
    key: "reportError",
    value: function reportError(arg0) {
      this.error(arg0);
    }
  },
  {
    key: "use",
    value: function use(bind) {
      const self = this;
      if (typeof bind !== "function") {
        const _Error3 = Error;
        error = new Error("plugins must be a function");
        throw error;
      } else {
        const tmp19 = bind.bind(self)(self);
        closure_1 = tmp19;
        if (typeof tmp19 !== "object") {
          let _Error2 = Error;
          let error1 = new Error("plugins must return an object");
          throw error1;
        } else {
          if (tmp19.features) {
            if (typeof tmp19.features !== "object") {
              let _Error = Error;
              const error2 = new Error("features must be an object");
              throw error2;
            } else {
              function inject(arg0) {

              }
              const _Object = Object;
              const keys = Object.keys(tmp19.features);
              const item = keys.forEach((item, index) => {
                if (typeof closure_0 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (typeof features.features[item] !== "function") {
                  const _Error2 = Error;
                  const _HermesInternal2 = HermesInternal;
                  error = new Error("feature " + item + " is not a function");
                  throw error;
                } else {
                  closure_0 = item;
                  if (closure_1_9.some((item, index) => item === closure_0)) {
                    const _Error = Error;
                    const _HermesInternal = HermesInternal;
                    const error1 = new Error("feature " + item + " is a reserved name");
                    throw error1;
                  } else {
                    self[item] = tmp;
                  }
                }
              });
            }
          }
          const plugins = self.plugins;
          plugins.push(tmp19);
          if (tmp2) {
            const onPlugin = tmp19.onPlugin;
            onPlugin.bind(self)(self);
          }
          return self;
        }
      }
    }
  },
  {
    key: "onCustomCommand",
    value: function onCustomCommand(command) {
      const self = this;
      if (typeof command === "string") {
        handler = arg1;
      } else {
        command = command.command;
        ({ handler, title, description, args } = command);
      }
      if (tmp) {
        if (handler) {
          let customCommands = self.customCommands;
          const found = customCommands.filter((item, index) => item.command === command);
          if (found.length > 0) {
            const item = found.forEach((item, index) => {
              closure_0 = item;
              const customCommands = self.customCommands;
              self.customCommands = customCommands.filter((item, index) => item.id !== item.id);
              self.send("customCommand.unregister", { id: item.id, command: item.command });
            });
          }
          if (args) {
            closure_2 = [];
            const item1 = args.forEach((item, index) => {
              if (item.name) {
                let arr = closure_2;
                if (closure_2.indexOf(item.name) > -1) {
                  const _Error2 = Error;
                  const _HermesInternal2 = HermesInternal;
                  error = new Error("A arg with the name \"" + item.name + "\" already exists in the command \"" + command + "\"");
                  throw error;
                } else {
                  arr = arr.push(item.name);
                }
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error1 = new Error("A arg on the command \"" + command + "\" is missing a name");
                throw error1;
              }
            });
          }
          let obj = { id: null, command: null, handler: null, title: null, description: null, args: null };
          obj[0] = self.customCommandLatestId;
          obj[1] = tmp;
          obj[2] = handler;
          obj[3] = title;
          obj[4] = description;
          obj[5] = args;
          self.customCommandLatestId = self.customCommandLatestId + 1;
          const customCommands1 = self.customCommands;
          customCommands1.push(obj);
          obj = { id: null, command: null, title: null, description: null, args: null };
          ({ id: obj2[0], command: obj2[1], title: obj2[2], description: obj2[3], args: obj2[4] } = obj);
          self.send("customCommand.register", obj);
          return () => {
            const customCommands = self.customCommands;
            self.customCommands = customCommands.filter((item, index) => item.id !== id.id);
            obj = { id: obj.id, command: obj.command };
            self.send("customCommand.unregister", obj);
          };
        } else {
          let _Error2 = Error;
          let _HermesInternal = HermesInternal;
          error = new Error("A handler is required for command \"" + tmp + "\"");
          throw error;
        }
      } else {
        let _Error = Error;
        let error1 = new Error("A command is required");
        throw error1;
      }
    }
  }
];
const _moduleResult = _createClass(ReactotronImpl, items1);
const unpackModuleId = _moduleResult;

export const assertHasLoggerPlugin = hasStateResponsePlugin.hasStateResponsePlugin;
export const assertHasStateResponsePlugin = hasStateResponsePlugin.hasStateResponsePlugin;
export const createClient = function createClient(arg0) {
  return new closure_11().configure(arg0);
};
export const hasStateResponsePlugin = hasStateResponsePlugin.hasStateResponsePlugin;
export const ArgType = { String: "string" };
export const corePlugins = items;
export const ReactotronImpl = _moduleResult;