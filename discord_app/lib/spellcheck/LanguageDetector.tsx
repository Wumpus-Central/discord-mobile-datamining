// === Module 5456: language ===

// Module 5456 (language)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("lib/spellcheck/LanguageDetector.tsx");
class LanguageDetector {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj._language = global;
    obj._languageHint = global;
    obj._onChange = require;
    tmp2 = require(global);
    return obj;
  }
}
const prototype = LanguageDetector.prototype;
Object.defineProperty(prototype, "language", {
  get: function language() {
    return this._language;
  },
  set: undefined
});
Object.defineProperty(prototype, "language", {
  get: undefined,
  set: function language(_language) {
    const self = this;
    if (this._language !== _language) {
      self._language = _language;
      self._onChange(_language);
    }
  }
});
Object.defineProperty(prototype, "languageHint", {
  get: undefined,
  set: function languageHint(_languageHint) {
    this._languageHint = _languageHint;
  }
});
prototype["process"] = function process(arg0) {
  const self = this;
  closure_0 = arg0;
  if (!this._processing) {
    tmp._processing = true;
    requestIdleCallback((timeRemaining) => {
      let arr = timeRemaining;
      if (timeRemaining.timeRemaining() <= _languageHint._minimumTimeRemaining) {
        obj._processEnd();
      } else {
        if (arr.length > 256) {
          arr = arr.slice(0, 256);
        }
        _languageHint = obj._languageHint;
        const obj2 = arr(self[0]);
        const ensureModuleResult = arr(self[0]).ensureModule("discord_spellcheck");
        arr(self[0]).ensureModule("discord_spellcheck").then(() => {
          let cld = lib(_languageHint[0]).requireModule("discord_spellcheck").cld;
          const obj = lib(_languageHint[0]);
          return new Promise((arg0, arg1) => {
            cld = arg0;
            closure_1 = arg1;
            cld.detect(cld, { httpHint: closure_1_1, encodingHint: "UTF8" }, (message, reliable) => {
              if (null != message) {
                const _Error2 = Error;
                error = new Error(message.message);
                callback2(error);
              } else {
                if (reliable.reliable) {
                  if (reliable.languages[0].percent >= 90) {
                    if (reliable.languages[0].score >= 500) {
                      callback(reliable.languages[0].code);
                    }
                  }
                }
                const _Error = Error;
                const error1 = new Error("Not enough reliable text.");
                callback2(error1);
              }
            });
          });
        }).then((language) => {
          _languageHint.language = language;
          _languageHint._processEnd(lib.didTimeout);
        }, () => {
          _languageHint._processEnd(lib.didTimeout);
        });
        const nextPromise = arr(self[0]).ensureModule("discord_spellcheck").then(() => {
          let cld = lib(_languageHint[0]).requireModule("discord_spellcheck").cld;
          const obj = lib(_languageHint[0]);
          return new Promise((arg0, arg1) => {
            cld = arg0;
            closure_1 = arg1;
            cld.detect(cld, { httpHint: closure_1_1, encodingHint: "UTF8" }, (message, reliable) => {
              if (null != message) {
                const _Error2 = Error;
                error = new Error(message.message);
                callback2(error);
              } else {
                if (reliable.reliable) {
                  if (reliable.languages[0].percent >= 90) {
                    if (reliable.languages[0].score >= 500) {
                      callback(reliable.languages[0].code);
                    }
                  }
                }
                const _Error = Error;
                const error1 = new Error("Not enough reliable text.");
                callback2(error1);
              }
            });
          });
        });
      }
    });
  }
};
prototype["_processEnd"] = function _processEnd(didTimeout) {
  let flag = didTimeout;
  if (didTimeout === undefined) {
    flag = false;
  }
  const self = this;
  this._processing = false;
  if (flag) {
    self._minimumTimeRemaining = self._minimumTimeRemaining + 1;
  }
};

export default LanguageDetector;