// _runtime/06242_PressableStateMachine.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

class PressableStateMachine {
  constructor() {
    _classCallCheck(this, PressableStateMachine);
    this.states = null;
    this.currentStepIndex = 0;
    this.eventPayload = null;
  }
}
const entry = {
  key: "setStates",
  value: function setStates(statesConfig) {
    this.states = statesConfig;
  },
};
const items = [
  entry,
  {
    key: "reset",
    value: function reset() {},
  },
  {
    key: "handleEvent",
    value: function handleEvent(arg0, arg1) {
      const self = this;
      if (this.states) {
        const tmp2 = arg1 || self.eventPayload;
        self.eventPayload = tmp2;
        if (self.currentStepIndex < self.states.length) {
          if (self.states[self.currentStepIndex].eventName !== arg0) {
            if (self.states[self.currentStepIndex].optional) {
              self.currentStepIndex = self.currentStepIndex + 1;
              while (self.currentStepIndex < self.states.length) {
                if (self.states[self.currentStepIndex].eventName === arg0) {
                  break;
                } else if (!self.states[self.currentStepIndex].optional) {
                  break;
                }
              }
            }
          }
        }
        if (self.currentStepIndex >= self.states.length) {
          self.reset();
        } else if (self.states[self.currentStepIndex].eventName === arg0) {
          const tmp6 = self.eventPayload && self.states[self.currentStepIndex].callback;
          if (tmp6) {
            self.states[self.currentStepIndex].callback(self.eventPayload);
          }
          self.currentStepIndex = self.currentStepIndex + 1;
          if (self.currentStepIndex === self.states.length) {
            self.reset();
          }
        } else if (self.currentStepIndex > 0) {
          self.reset();
          self.handleEvent(arg0, arg1);
        }
      }
    },
  },
];
const PressableStateMachine_export = _createClassDefault(PressableStateMachine, items);

export { PressableStateMachine_export as PressableStateMachine };
