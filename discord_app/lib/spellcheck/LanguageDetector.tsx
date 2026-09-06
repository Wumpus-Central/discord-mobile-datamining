// discord_app/lib/spellcheck/LanguageDetector.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("lib/spellcheck/LanguageDetector.tsx");
class LanguageDetector {
  constructor(arg0, arg1) {
    merged = Object.assign({ _shouldProcess: false, _processing: false, _minimumTimeRemaining: 5 });
    merged._language = global;
    merged._languageHint = global;
    merged._onChange = require;
    tmp2 = require(global);
    return merged;
  }
}
const prototype = LanguageDetector.prototype;
Object.defineProperty(prototype, "language", {
  get: function language() {
    return this._language;
  },
  set: undefined,
});
Object.defineProperty(prototype, "language", {
  get: undefined,
  set: function language(_language) {
    const self = this;
    if (this._language !== _language) {
      self._language = _language;
      self._onChange(_language);
    }
  },
});
Object.defineProperty(prototype, "languageHint", {
  get: undefined,
  set: function languageHint(_languageHint) {
    this._languageHint = _languageHint;
  },
});
prototype["process"] = function process(arg0) {
  const self = this;
  closure_0 = arg0;
  if (!this._processing) {
    tmp._processing = true;
    requestIdleCallback((timeRemaining) => {
      closure_0 = timeRemaining;
      if (timeRemaining.timeRemaining() <= _languageHint._minimumTimeRemaining) {
        obj._processEnd();
      } else {
        if (closure_0.length > 256) {
          closure_0 = closure_0.slice(0, 256);
        }
        _languageHint = obj._languageHint;
        const obj2 = closure_0(self[0]);
        const ensureModuleResult = closure_0(self[0]).ensureModule("discord_spellcheck");
        closure_0(self[0])
          .ensureModule("discord_spellcheck")
          .then(() => {
            const cld = closure_0(_languageHint[0]).requireModule("discord_spellcheck").cld;
            const obj = closure_0(_languageHint[0]);
            return new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              cld.detect(closure_0, { httpHint: _languageHint, encodingHint: "UTF8" }, (message, reliable) => {
                if (null != message) {
                  const _Error2 = Error;
                  const error = new Error(message.message);
                  closure_1(error);
                } else {
                  if (reliable.reliable) {
                    if (reliable.languages[0].percent >= 90) {
                      if (reliable.languages[0].score >= 500) {
                        closure_0(reliable.languages[0].code);
                      }
                    }
                  }
                  const _Error = Error;
                  const error1 = new Error("Not enough reliable text.");
                  closure_1(error1);
                }
              });
            });
          })
          .then(
            (language) => {
              self.language = language;
              self._processEnd(closure_0.didTimeout);
            },
            () => {
              self._processEnd(closure_0.didTimeout);
            },
          );
        const nextPromise = closure_0(self[0])
          .ensureModule("discord_spellcheck")
          .then(() => {
            const cld = closure_0(_languageHint[0]).requireModule("discord_spellcheck").cld;
            const obj = closure_0(_languageHint[0]);
            return new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              cld.detect(closure_0, { httpHint: _languageHint, encodingHint: "UTF8" }, (message, reliable) => {
                if (null != message) {
                  const _Error2 = Error;
                  const error = new Error(message.message);
                  closure_1(error);
                } else {
                  if (reliable.reliable) {
                    if (reliable.languages[0].percent >= 90) {
                      if (reliable.languages[0].score >= 500) {
                        closure_0(reliable.languages[0].code);
                      }
                    }
                  }
                  const _Error = Error;
                  const error1 = new Error("Not enough reliable text.");
                  closure_1(error1);
                }
              });
            });
          });
      }
    });
  }
};
prototype["_processEnd"] = function _processEnd() {
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
