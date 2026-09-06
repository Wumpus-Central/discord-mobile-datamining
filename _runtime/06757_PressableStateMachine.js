// === Module 6757: PressableStateMachine ===

// Module 6757 (PressableStateMachine)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class PressableStateMachine {
  constructor() {
    tmp = closure_0(this, PressableStateMachine);
    this.states = null;
    this.currentStepIndex = 0;
    this.eventPayload = null;
    return;
  }
}
_classCallCheck = PressableStateMachine;
const entry = {
  key: "setStates",
  value: function setStates(statesConfig) {
    this.states = statesConfig;
  }
};
const items = [
  entry,
  {
    key: "reset",
    value: function reset() {

    }
  },
  {
    key: "handleEvent",
    value: function handleEvent(arg0, arg1) {
      const self = this;
      if (this.states) {
        let eventPayload = arg1;
        if (!arg1) {
          eventPayload = self.eventPayload;
        }
        self.eventPayload = eventPayload;
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
          if (tmp5) {
            obj.callback(self.eventPayload);
          }
          self.currentStepIndex = self.currentStepIndex + 1;
          if (self.currentStepIndex === self.states.length) {
            self.reset();
          }
          tmp5 = self.eventPayload && obj.callback;
        } else if (self.currentStepIndex > 0) {
          self.reset();
          self.handleEvent(arg0, arg1);
        }
      }
    }
  }
];

export const PressableStateMachine = _createClassDefault(PressableStateMachine, items);