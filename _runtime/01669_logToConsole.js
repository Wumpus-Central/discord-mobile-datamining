// === Module 1669: logToConsole ===

// Module 1669 (logToConsole)
let obj = { warn: 1, [1]: "warn", error: 2, [2]: "error" };
let items = [{ code: "(function logToConsole_Pnpm_loggerTs1(data){let[ReanimatedLogLevel]=this.__closure;switch(data.level){case ReanimatedLogLevel.warn:console.warn(data.message);break;case ReanimatedLogLevel.error:console.error(data.message);break;}})" }, obj];
let closure_129_0;
[tmp3, tmp4] = items;
function logToConsole(level) {
  level = level.level;
  if (__reanimatedLoggerConfig.warn === level) {
    const _console2 = console;
    console.warn(level.message);
  } else if (tmp.error === level) {
    const _console = console;
    console.error(level.message);
  }
}
const items1 = [tmp4];
logToConsole.__closure = items1;
logToConsole.__workletHash = 13335938024601;
logToConsole.__initData = tmp3;
let obj2 = { logFunction: logToConsole, level: obj.warn, strict: true };
const items2 = [{ code: "(function getLoggerConfig_Pnpm_loggerTs2(){let[DEFAULT_LOGGER_CONFIG]=this.__closure;if(!global.__reanimatedLoggerConfig){global.__reanimatedLoggerConfig=DEFAULT_LOGGER_CONFIG;}return global.__reanimatedLoggerConfig;})" }, obj2];
[tmp5, tmp6] = items2;
function getLoggerConfig() {
  if (!__reanimatedLoggerConfig.__reanimatedLoggerConfig) {
    __reanimatedLoggerConfig.__reanimatedLoggerConfig = __reanimatedLoggerConfig;
  }
  return __reanimatedLoggerConfig.__reanimatedLoggerConfig;
}
const items3 = [tmp6];
getLoggerConfig.__closure = items3;
getLoggerConfig.__workletHash = 15696152097472;
getLoggerConfig.__initData = tmp5;
const items4 = [{ code: "(function updateLoggerConfig_Pnpm_loggerTs3(currentConfig,options,onLog){let[DEFAULT_LOGGER_CONFIG]=this.__closure;var _options$level,_options$strict;global.__reanimatedLoggerConfig={...currentConfig,level:(_options$level=options===null||options===void 0?void 0:options.level)!==null&&_options$level!==void 0?_options$level:DEFAULT_LOGGER_CONFIG.level,strict:(_options$strict=options===null||options===void 0?void 0:options.strict)!==null&&_options$strict!==void 0?_options$strict:DEFAULT_LOGGER_CONFIG.strict,onLog:onLog};})" }, obj2];
let c0;
[tmp7, tmp8] = items4;
function updateLoggerConfig(loggerConfig, level, onLog) {
  const obj = {};
  const merged = Object.assign(loggerConfig);
  level = undefined;
  if (level != null) {
    level = level.level;
  }
  if (level == null) {
    level = __reanimatedLoggerConfig.level;
  }
  obj.level = level;
  let strict;
  if (level != null) {
    strict = level.strict;
  }
  if (strict == null) {
    strict = __reanimatedLoggerConfig.strict;
  }
  obj.strict = strict;
  obj.onLog = onLog;
  closure_0.__reanimatedLoggerConfig = obj;
}
const items5 = [tmp8];
updateLoggerConfig.__closure = items5;
updateLoggerConfig.__workletHash = 4519816893551;
updateLoggerConfig.__initData = tmp7;
const items6 = [{ code: "(function handleLog_Pnpm_loggerTs4(level,message,options){let[getLoggerConfig,DOCS_REFERENCE,PREFIX]=this.__closure;var _config$onLog;const config=getLoggerConfig();if(options.strict&&!config.strict||level<config.level){return;}if(options.strict){message+=\"\\n\\n\"+DOCS_REFERENCE;}const data={level:level,message:PREFIX+\" \"+message};config.logFunction(data);(_config$onLog=config.onLog)===null||_config$onLog===void 0||_config$onLog.call(config,data);})" }, getLoggerConfig, "If you don't want to see this message, you can disable the `strict` mode. Refer to:\nhttps://docs.swmansion.com/react-native-reanimated/docs/debugging/logger-configuration for more details.", "[Reanimated]"];
let closure_130_0;
let closure_130_1;
let closure_130_2;
[tmp9, tmp10, tmp11, tmp12] = items6;
function handleLog(level, arg1, strict) {
  const obj = __reanimatedLoggerConfig();
  if (!strict.strict) {
    if (level >= obj.level) {
      let sum = arg1;
      if (strict.strict) {
        const _HermesInternal = HermesInternal;
        sum = arg1 + "\n\n" + duration;
      }
      const obj2 = { level, message: null };
      const _HermesInternal2 = HermesInternal;
      obj2.message = "" + set + " " + sum;
      obj.logFunction(obj2);
      const onLog = obj.onLog;
      if (onLog != null) {
        onLog(obj2);
      }
    }
  }
}
const items7 = [tmp10, tmp11, tmp12];
handleLog.__closure = items7;
handleLog.__workletHash = 4998284732367;
handleLog.__initData = tmp9;
const items8 = [{ code: "(function warn_Pnpm_loggerTs5(message,options={}){let[handleLog,ReanimatedLogLevel]=this.__closure;handleLog(ReanimatedLogLevel.warn,message,options);})" }, handleLog, obj];
let closure_131_0;
let closure_131_1;
[tmp13, tmp14, tmp15] = items8;
const obj3 = { warn: null, warnOnce: null, error: null };
function warn(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  __reanimatedLoggerConfig(duration.warn, arg0, obj);
}
const items9 = [tmp14, tmp15];
warn.__closure = items9;
warn.__workletHash = 1010345593005;
warn.__initData = tmp13;
obj3.warn = warn;
const items10 = [{ code: "(function warnOnce_Pnpm_loggerTs6(message,level){let[getLoggerConfig,ReanimatedLogLevel,loggedMessages,handleLog]=this.__closure;var _Error$stack;if(getLoggerConfig().level>ReanimatedLogLevel.warn){return;}const frames=(_Error$stack=new Error().stack)===null||_Error$stack===void 0?void 0:_Error$stack.split('\\n').map(function(line){return line.trim();}).filter(function(line){return line.startsWith('at ')||line.includes('@');});const frame=Number.isInteger(level)&&level>=0?frames===null||frames===void 0?void 0:frames[level+1]:undefined;const key=JSON.stringify([message,frame!==null&&frame!==void 0?frame:null]);if(loggedMessages.has(key)){return;}loggedMessages.add(key);handleLog(ReanimatedLogLevel.warn,message,{});})" }, getLoggerConfig, obj, new Set(), handleLog];
let closure_132_0;
let closure_132_1;
let closure_132_2;
let closure_132_3;
[tmp16, tmp17, tmp18, tmp19, tmp20] = items10;
function warnOnce(arg0, arg1) {
  if (__reanimatedLoggerConfig().level <= duration.warn) {
    const _Error = Error;
    const error = new Error();
    if (error.stack != null) {
      const parts = str2.split("\n");
      const mapped = parts.map((item) => item.trim());
      const found = mapped.filter((item) => {
        let startsWithResult = item.startsWith("at ");
        if (!startsWithResult) {
          startsWithResult = item.includes("@");
        }
        return startsWithResult;
      });
    }
    const _Number = Number;
    let tmp4;
    if (Number.isInteger(arg1)) {
      if (arg1 >= 0) {
        let tmp5;
        if (found != null) {
          tmp5 = found[arg1 + 1];
        }
        tmp4 = tmp5;
      }
    }
    items = [arg0, ];
    if (tmp4 == null) {
      tmp4 = null;
    }
    items[1] = tmp4;
    const json = JSON.stringify(items);
    if (!set.has(json)) {
      set.add(json);
      React3(tmp.warn, arg0, {});
    }
  }
}
const items11 = [tmp17, tmp18, tmp19, tmp20];
warnOnce.__closure = items11;
warnOnce.__workletHash = 922237503307;
warnOnce.__initData = tmp16;
obj3.warnOnce = warnOnce;
const items12 = [{ code: "(function error_Pnpm_loggerTs7(message,options={}){let[handleLog,ReanimatedLogLevel]=this.__closure;handleLog(ReanimatedLogLevel.error,message,options);})" }, handleLog, obj];
let closure_133_0;
let closure_133_1;
[tmp21, tmp22, tmp23] = items12;
function error(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  __reanimatedLoggerConfig(duration.error, arg0, obj);
}
const items13 = [tmp22, tmp23];
error.__closure = items13;
error.__workletHash = 3500369423631;
error.__initData = tmp21;
obj3.error = error;

export const ReanimatedLogLevel = obj;
export { getLoggerConfig };
export { updateLoggerConfig };
export const logger = obj3;