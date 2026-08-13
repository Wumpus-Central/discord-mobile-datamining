// _runtime/05569_PressableStateMachine.js
import PressableStateMachine from "_classCallCheck";

class PressableStateMachine {
  constructor() {
    tmp = PressableStateMachine(this, PressableStateMachine);
    this.states = null;
    this.currentStepIndex = 0;
    this.eventPayload = null;
    return;
  }
}
const items = [
  {
    key: "setStates",
    value: function setStates(statesConfig) {
      this.states = statesConfig;
    }
  },
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

export const PressableStateMachine = require("_createClass")(PressableStateMachine, items);