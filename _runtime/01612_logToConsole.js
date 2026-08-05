import { addLogBoxLog } from "01611_addLogBoxLog.js";
// _runtime/01612_logToConsole.js
const global = arg0;
const require = arg1;
const dependencyMap = arg6;
let c3 = "If you don't want to see this message, you can disable the `strict` mode. Refer to:\nhttps://docs.swmansion.com/react-native-reanimated/docs/debugging/logger-configuration for more details.";
let obj = { warn: 1, [1]: "warn", error: 2, [2]: "error" };
function logToConsole(level) {
  level = level.level;
  if ("warn" === level) {
    const _console2 = console;
    console.warn(level.message.content);
  } else {
    const _console = console;
    console.error(level.message.content);
  }
}
logToConsole.__closure = {};
logToConsole.__workletHash = 4297880609329;
logToConsole.__initData = { code: "function logToConsole_Pnpm_loggerTs1(data){switch(data.level){case'warn':console.warn(data.message.content);break;case'error':case'fatal':case'syntax':console.error(data.message.content);break;}}" };
obj = { logFunction: logToConsole, level: obj.warn, strict: true };
function formatMessage(arg0) {
  return "[Reanimated] " + arg0;
}
formatMessage.__closure = {};
formatMessage.__workletHash = 4586683970876;
formatMessage.__initData = { code: "function formatMessage_Pnpm_loggerTs2(message){return\"[Reanimated] \"+message;}" };
function createLog(level) {
  if (typeof formatMessage !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const combined = "[Reanimated] " + arg1;
  const obj = { level, message: { content: combined, substitutions: [] }, category: combined, componentStack: [], componentStackType: null, stack: null };
  const error = new Error();
  obj[5] = error.stack;
  return obj;
}
createLog.__closure = { formatMessage };
createLog.__workletHash = 5107313473751;
createLog.__initData = { code: "function createLog_Pnpm_loggerTs3(level,message){const{formatMessage}=this.__closure;const formattedMessage=formatMessage(message);return{level:level,message:{content:formattedMessage,substitutions:[]},category:formattedMessage,componentStack:[],componentStackType:null,stack:new Error().stack};}" };
function registerLoggerConfig(DEFAULT_LOGGER_CONFIG) {
  global.__reanimatedLoggerConfig = DEFAULT_LOGGER_CONFIG;
}
registerLoggerConfig.__closure = {};
registerLoggerConfig.__workletHash = 1484852907300;
registerLoggerConfig.__initData = { code: "function registerLoggerConfig_Pnpm_loggerTs4(config){global.__reanimatedLoggerConfig=config;}" };
function replaceLoggerImplementation(fn) {
  const obj = {};
  const merged = Object.assign(global.__reanimatedLoggerConfig);
  obj.logFunction = fn;
  if (typeof registerLoggerConfig !== "function") {
    HermesBuiltin.throwTypeError();
  }
  global.__reanimatedLoggerConfig = obj;
}
replaceLoggerImplementation.__closure = { registerLoggerConfig };
replaceLoggerImplementation.__workletHash = 9450518662656;
replaceLoggerImplementation.__initData = { code: "function replaceLoggerImplementation_Pnpm_loggerTs5(logFunction){const{registerLoggerConfig}=this.__closure;registerLoggerConfig({...global.__reanimatedLoggerConfig,logFunction:logFunction});}" };
function updateLoggerConfig(level) {
  const obj = {};
  const merged = Object.assign(global.__reanimatedLoggerConfig);
  level = undefined;
  if (level != null) {
    level = level.level;
  }
  if (level == null) {
    level = obj.level;
  }
  obj.level = level;
  let strict;
  if (level != null) {
    strict = level.strict;
  }
  if (strict == null) {
    strict = obj.strict;
  }
  obj.strict = strict;
  if (typeof registerLoggerConfig !== "function") {
    HermesBuiltin.throwTypeError();
  }
  global.__reanimatedLoggerConfig = obj;
}
updateLoggerConfig.__closure = { registerLoggerConfig, DEFAULT_LOGGER_CONFIG: obj };
updateLoggerConfig.__workletHash = 14435084623184;
updateLoggerConfig.__initData = { code: "function updateLoggerConfig_Pnpm_loggerTs6(options){const{registerLoggerConfig,DEFAULT_LOGGER_CONFIG}=this.__closure;var _options$level,_options$strict;registerLoggerConfig({...global.__reanimatedLoggerConfig,level:(_options$level=options===null||options===void 0?void 0:options.level)!==null&&_options$level!==void 0?_options$level:DEFAULT_LOGGER_CONFIG.level,strict:(_options$strict=options===null||options===void 0?void 0:options.strict)!==null&&_options$strict!==void 0?_options$strict:DEFAULT_LOGGER_CONFIG.strict});}" };
function handleLog(error, arg1, strict) {
  const __reanimatedLoggerConfig = global.__reanimatedLoggerConfig;
  let tmp = strict.strict && !__reanimatedLoggerConfig.strict;
  if (!tmp) {
    tmp = obj[error] < __reanimatedLoggerConfig.level;
  }
  if (!tmp) {
    let sum = arg1;
    if (strict.strict) {
      const _HermesInternal = HermesInternal;
      sum = arg1 + "\n\n" + c3;
    }
    if (typeof createLog !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (typeof formatMessage !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _HermesInternal2 = HermesInternal;
    const combined = "[Reanimated] " + sum;
    obj = { level: null, message: null, category: null, componentStack: null, componentStackType: null, stack: null };
    obj[0] = error;
    obj = { content: null, substitutions: null };
    obj[0] = combined;
    obj[1] = [];
    obj[1] = obj;
    obj[2] = combined;
    obj[3] = [];
    const _Error = Error;
    error = new Error();
    obj[5] = error.stack;
    __reanimatedLoggerConfig.logFunction(obj);
  }
}
handleLog.__closure = { LogLevel: obj, DOCS_REFERENCE: "If you don't want to see this message, you can disable the `strict` mode. Refer to:\nhttps://docs.swmansion.com/react-native-reanimated/docs/debugging/logger-configuration for more details.", createLog };
handleLog.__workletHash = 5113579927044;
handleLog.__initData = { code: "function handleLog_Pnpm_loggerTs7(level,message,options){const{LogLevel,DOCS_REFERENCE,createLog}=this.__closure;const config=global.__reanimatedLoggerConfig;if(options.strict&&!config.strict||LogLevel[level]<config.level){return;}if(options.strict){message+=\"\\n\\n\"+DOCS_REFERENCE;}config.logFunction(createLog(level,message));}" };
obj = { warn: fn, error: null };
fn = function v(arg0, strict) {
  let obj = strict;
  if (strict === undefined) {
    obj = {};
  }
  handleLog("warn", arg0, obj);
};
fn.__closure = { handleLog };
fn.__workletHash = 13521870617115;
fn.__initData = { code: "function warn_Pnpm_loggerTs8(message,options={}){const{handleLog}=this.__closure;handleLog('warn',message,options);}" };
class L {
  constructor(arg0) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    tmp = handleLog("error", arg0, obj);
    return;
  }
}
L.__closure = { handleLog };
L.__workletHash = 10275432056698;
L.__initData = { code: "function error_Pnpm_loggerTs9(message,options={}){const{handleLog}=this.__closure;handleLog('error',message,options);}" };
obj[1] = L;
arg5.LogLevel = obj;
arg5.DEFAULT_LOGGER_CONFIG = obj;
arg5.logToLogBoxAndConsole = function logToLogBoxAndConsole(level) {
  addLogBoxLog /* addLogBoxLog */.addLogBoxLog(level);
  if (typeof logToConsole !== "function") {
    HermesBuiltin.throwTypeError();
  }
  level = level.level;
  if ("warn" === level) {
    const _console2 = console;
    console.warn(level.message.content);
  } else {
    const _console = console;
    console.error(level.message.content);
  }
};
arg5.registerLoggerConfig = registerLoggerConfig;
arg5.replaceLoggerImplementation = replaceLoggerImplementation;
arg5.updateLoggerConfig = updateLoggerConfig;
arg5.logger = obj;