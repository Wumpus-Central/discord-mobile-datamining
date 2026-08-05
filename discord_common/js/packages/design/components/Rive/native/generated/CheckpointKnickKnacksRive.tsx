import { BaseRive } from "../BaseRive.tsx";
import { getDerivedStateFromError } from "../RiveErrorBoundary.tsx";
// discord_common/js/packages/design/components/Rive/native/generated/CheckpointKnickKnacksRive.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { Preview: { reducedMotion: "boolean", iconColor: "color" }, Friends: { reducedMotion: "boolean", iconColor: "color" }, Globe: { reducedMotion: "boolean", iconColor: "color" }, "Globe Single Line": {}, Emojis: { reducedMotion: "boolean", iconColor: "color" }, "Wave Line": { reducedMotion: "boolean", iconColor: "color" }, Games: { reducedMotion: "boolean", iconColor: "color" }, Voice: { reducedMotion: "boolean", iconColor: "color" }, "Looping Checkboard": { reducedMotion: "boolean", iconColor: "color" }, CheckRow: { reducedMotion: "boolean", iconColor: "color" }, Quests: { reducedMotion: "boolean", iconColor: "color" }, Entry: { reducedMotion: "boolean", iconColor: "color" }, Messages: { reducedMotion: "boolean", iconColor: "color" }, Servers: { reducedMotion: "boolean", iconColor: "color" } };
let closure_8 = { Preview: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Friends: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Globe: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], "Globe Single Line": [], Emojis: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], "Wave Line": ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Games: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Voice: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], "Looping Checkboard": ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], CheckRow: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Quests: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Entry: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Messages: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"], Servers: ["Pink", "Orange", "Green", "Lavender", "Yellow", "Cyan"] };
let closure_9 = {
  Preview: function PreviewBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  Friends: function FriendsBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  Globe: function GlobeBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  Emojis: function EmojisBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  "Wave Line": function WaveLineBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  Games: function GamesBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  Voice: function VoiceBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  "Looping Checkboard": function LoopingCheckboardBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  CheckRow: function CheckRowBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  Quests: function QuestsBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  Entry: function EntryBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  Messages: function MessagesBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  },
  Servers: function ServersBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive /* BaseRive */;
    let iconColor;
    if (dataBinding != null) {
      iconColor = dataBinding.iconColor;
    }
    let iconColor1;
    if (onDataBindingChange != null) {
      iconColor1 = onDataBindingChange.iconColor;
    }
    const colorBinding = BaseRive /* BaseRive */.useColorBinding("iconColor", instance, iconColor, iconColor1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function CheckpointKnickKnacksRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Preview";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Pink";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != outer1_9[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = outer1_6(tmp, obj);
    }
    return tmp2;
  }, items);
  let obj = { ref, src: null, artboard: null, artboardProperties: null, artboardViewModelInstances: null, defaultViewModelInstance: null, stateMachine: null, renderDataBinding: null };
  obj[1] = dataBinding(onDataBindingChange[4]);
  obj[2] = str;
  obj[3] = closure_7;
  obj[4] = closure_8;
  obj[5] = str2;
  obj[6] = defaultViewModelInstance.stateMachine;
  obj[7] = callback;
  let merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: null, artboard: null, artboardProperties: null, artboardViewModelInstances: null, defaultViewModelInstance: null, stateMachine: null, renderDataBinding: null });
});
const forwardRefResult = importAllResult.forwardRef(function CheckpointKnickKnacksRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={arg1} />;
  return jsx(getDerivedStateFromError /* getDerivedStateFromError */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointKnickKnacksRive.tsx");

export const CheckpointKnickKnacksRive = forwardRefResult;