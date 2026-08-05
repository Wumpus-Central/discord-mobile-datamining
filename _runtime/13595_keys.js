// _runtime/13595_keys.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";
import module_13596 from "module_13596";
import hasLoggerPlugin from "hasLoggerPlugin";
import module_13598 from "module_13598";
import module_13599 from "module_13599";
import hasStateResponsePlugin from "hasStateResponsePlugin";
import module_13601 from "module_13601";
import module_13602 from "module_13602";
import repl from "repl";
import serialize from "serialize";

const ReactotronImpl = require;
function emptyPromise() {
  return Promise.resolve("");
}
if (!module_13596) {
  const obj1 = { default: null };
  obj1[0] = module_13596;
  let tmp7 = obj1;
} else {
  tmp7 = module_13596;
}
let c3 = tmp7;
if (!module_13598) {
  const obj2 = { default: null };
  obj2[0] = module_13598;
  let obj5 = obj2;
} else {
  obj5 = module_13598;
}
if (!module_13599) {
  const obj3 = { default: null };
  obj3[0] = module_13599;
  let obj7 = obj3;
} else {
  obj7 = module_13599;
}
if (!module_13601) {
  hasLoggerPlugin = { default: null };
  hasLoggerPlugin[0] = module_13601;
  let obj11 = hasLoggerPlugin;
} else {
  obj11 = module_13601;
}
if (!module_13602) {
  obj5 = { default: null };
  obj5[0] = module_13602;
  let obj13 = obj5;
} else {
  obj13 = module_13602;
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
let closure_6 = tmp14;
const items = [obj5.default(), hasLoggerPlugin.default(), obj7.default(), hasStateResponsePlugin.default(), obj11.default(), obj13.default(), obj15.default()];
let closure_9 = ["configure", "connect", "connected", "options", "plugins", "send", "socket", "startTimer", "use"];
class ReactotronImpl {
  constructor() {
    self = this;
    tmp = emptyPromise(this, self);
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
      const defaultResult = outer1_6.default({ type, payload, important, date: date.toISOString(), deltaTime: num }, self.options.proxyHack);
      if (self.isReady) {
        try {
          const socket = tmp4.socket;
          socket.send(defaultResult);
        } catch (err) {
          tmp2.isReady = false;
          const _console = tmp.console;
          _console.log("An error occurred communicating with reactotron. Please reload your app");
        }
      } else {
        const sendQueue = tmp4.sendQueue;
        sendQueue.push(defaultResult);
      }
    };
    return;
  }
}
const items1 = [
  {
    key: "configure",
    value: function configure(arg0) {
      let self = this;
      self = this;
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
      tmp7.default(merged);
      this.options = merged;
      if (Array.isArray(this.options.plugins)) {
        const plugins = self.options.plugins;
        const item = plugins.forEach((arg0) => self.use(arg0));
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
      let _classCallCheck;
      let _interopRequireWildcard;
      let client;
      let closure_6;
      let createSocket;
      let dependencyMap;
      let hasStateResponsePlugin;
      let host;
      let port;
      let secure;
      let self = this;
      self = this;
      this.connected = true;
      let options = this.options;
      ({ host, environment: dependencyMap, port, name: _classCallCheck, client } = options);
      ({ createSocket, secure } = options);
      if (undefined === client) {
        client = {};
      }
      const getClientId = options.getClientId;
      ({ onCommand: hasStateResponsePlugin, onConnect: closure_6, onDisconnect: _interopRequireWildcard } = self.options);
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
        const item = plugins.forEach((onConnect) => onConnect.onConnect && onConnect.onConnect());
        let tmp4 = getClientId;
        if (!getClientId) {
          tmp4 = outer1_10;
        }
        tmp4(closure_2).then((clientId) => {
          let length;
          closure_8.isReady = true;
          const obj = { environment: closure_1 };
          const merged = Object.assign(closure_3);
          obj.name = closure_2;
          obj.clientId = clientId;
          obj.reactotronCoreClientVersion = "REACTOTRON_CORE_CLIENT_VERSION";
          closure_8.send("client.intro", obj);
          if (closure_8.sendQueue.length > 0) {
            do {
              let tmp3 = closure_8;
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
        const item = plugins.forEach((onDisconnect) => onDisconnect.onDisconnect && onDisconnect.onDisconnect());
      }
      function onMessage(str) {
        if (typeof str === "string") {
          const _JSON2 = JSON;
          let parsed = JSON.parse(str);
        } else {
          const _Buffer = Buffer;
          parsed = str;
          if (Buffer.isBuffer(str)) {
            const _JSON = JSON;
            parsed = JSON.parse(str.toString());
          }
        }
        if (closure_5) {
          tmp3(parsed);
        }
        const plugins = self.plugins;
        const item = plugins.forEach((onCommand) => {
          onCommand = onCommand.onCommand;
          if (onCommand) {
            onCommand = onCommand.onCommand(parsed);
          }
          return onCommand;
        });
        if ("custom" === parsed.type) {
          const customCommands = tmp5.customCommands;
          const found = customCommands.filter((command) => {
            if (typeof parsed.payload === "string") {
              let tmp2 = command.command === tmp.payload;
            } else {
              tmp2 = command.command === tmp.payload.command;
            }
            return tmp2;
          });
          const item1 = found.forEach((handler) => {
            let args;
            if (typeof parsed.payload === "object") {
              args = parsed.payload.args;
            }
            return handler.handler(args);
          });
        } else {
          if (tmp7) {
            const options = tmp5.options;
            options.setClientId(parsed.payload);
          }
          tmp7 = "setClientId" === parsed.type && tmp5.options.setClientId;
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
    value: function display(name) {
      let image;
      let important;
      let preview;
      let value;
      ({ value, preview, image, important } = name);
      let tmp = undefined !== important;
      if (tmp) {
        tmp = important;
      }
      const obj = { name: name.name, value: null, preview: null, image: null };
      obj[1] = value;
      obj[2] = preview;
      obj[3] = image;
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
    value: function use(fn) {
      let self = this;
      self = this;
      if (typeof fn !== "function") {
        const _Error3 = Error;
        let error = new Error("plugins must be a function");
        throw error;
      } else {
        const tmp19 = fn.bind(self)(self);
        const dependencyMap = tmp19;
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
              const item = keys.forEach((arg0) => {
                if (typeof closure_0 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (typeof tmp19.features[arg0] !== "function") {
                  const _Error2 = Error;
                  const _HermesInternal2 = HermesInternal;
                  const error = new Error("feature " + arg0 + " is not a function");
                  throw error;
                } else {
                  closure_0 = arg0;
                  if (outer1_9.some((arg0) => arg0 === closure_0)) {
                    const _Error = Error;
                    const _HermesInternal = HermesInternal;
                    const error1 = new Error("feature " + arg0 + " is a reserved name");
                    throw error1;
                  } else {
                    self[arg0] = tmp;
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
    value: function onCustomCommand(str) {
      let args;
      let description;
      let handler;
      let title;
      let self = this;
      self = this;
      if (typeof str === "string") {
        handler = arg1;
        let command = str;
      } else {
        command = str.command;
        ({ handler, title, description, args } = str);
      }
      if (tmp) {
        if (handler) {
          let customCommands = self.customCommands;
          const found = customCommands.filter((command) => command.command === command);
          if (found.length > 0) {
            const item = found.forEach((id) => {
              let closure_0 = id;
              const customCommands = self.customCommands;
              self.customCommands = customCommands.filter((id) => id.id !== id.id);
              self.send("customCommand.unregister", { id: id.id, command: id.command });
            });
          }
          if (args) {
            let closure_2 = [];
            const item1 = args.forEach((name) => {
              if (name.name) {
                let arr = closure_2;
                if (closure_2.indexOf(name.name) > -1) {
                  const _Error2 = Error;
                  const _HermesInternal2 = HermesInternal;
                  const error = new Error("A arg with the name \"" + name.name + "\" already exists in the command \"" + command + "\"");
                  throw error;
                } else {
                  arr = arr.push(name.name);
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
            self.customCommands = customCommands.filter((id) => id.id !== id.id);
            obj = { id: obj.id, command: obj.command };
            self.send("customCommand.unregister", obj);
          };
        } else {
          let _Error2 = Error;
          let _HermesInternal = HermesInternal;
          let error = new Error("A handler is required for command \"" + tmp + "\"");
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