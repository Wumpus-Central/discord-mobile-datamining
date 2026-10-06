// === Module 5961: LanguageDetector ===

// Module 5961 (LanguageDetector)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/spellcheck/LanguageDetector.tsx");
class LanguageDetector {
  constructor(_language, _onChange) {
    const merged = Object.assign({ _shouldProcess: false, _processing: false, _minimumTimeRemaining: 5 });
    merged._language = _language;
    merged._languageHint = _language;
    merged._onChange = _onChange;
    _onChange(_language);
    return merged;
  }
  process(arg0) {
    let self = this;
    let closure_0 = arg0;
    if (!this._processing) {
      tmp._processing = true;
      const tmp2 = globalThis;
      requestIdleCallback((timeRemaining) => {
        closure_0 = timeRemaining;
        if (timeRemaining.timeRemaining() <= self._minimumTimeRemaining) {
          self._processEnd();
        } else {
          if (closure_0.length > 256) {
            closure_0 = closure_0.slice(0, 256);
          }
          const _languageHint = self._languageHint;
          const obj2 = closure_0(self[0]);
          const ensureModuleResult = obj2.ensureModule("discord_spellcheck");
          const nextPromise = ensureModuleResult.then(() => {
            let obj = closure_0(_languageHint[0]);
            const cld = obj.requireModule("discord_spellcheck").cld;
            const promise = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              let closure_1 = arg1;
              const obj = { httpHint: _languageHint, encodingHint: "UTF8" };
              cld.detect(closure_0, obj, function(message, reliable) {
                if (null != message) {
                  const _Error2 = Error;
                  const self3 = this;
                  const self4 = this;
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
                  self = this;
                  const self2 = this;
                  const error1 = new Error("Not enough reliable text.");
                  closure_1(error1);
                }
              });
            });
            return promise;
          });
          nextPromise.then((language) => {
            self.language = language;
            self._processEnd(closure_0.didTimeout);
          }, () => {
            self._processEnd(closure_0.didTimeout);
          });
        }
      });
    }
  }
  _processEnd() {
    let flag = didTimeout;
    if (didTimeout === undefined) {
      flag = false;
    }
    const self = this;
    this._processing = false;
    if (flag) {
      self._minimumTimeRemaining = self._minimumTimeRemaining + 1;
    }
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

export default LanguageDetector;