// === Module 4674: CheckpointCardRive ===

// Module 4674 (CheckpointCardRive)
import c from "c" /* 576 */;
import BaseRive from "BaseRive" /* 4612 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 4665 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_4 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = fn(21).jsx;
const artboardProperties = { Main: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Cassette: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cassette Icon": {}, Cat: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Cat Icon": {}, Banana: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Banana Icon": {}, "Duck Icon": {}, Duck: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Snail Icon": {}, Snail: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Origami Icon": {}, Origami: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Disco Icon": {}, Disco: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Capybara: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Capybara Icon": {}, Donut: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Donut Icon": {}, "Bonsai Icon": {}, Bonsai: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, "Globe Single Line": {}, "Card Back": { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Knickknack: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" }, Globe: {}, Card: { reducedMotion: "boolean", Icon: "artboard", Illustration: "artboard", AnimationState: "number", PowerMeter: "number", LVL: "string", PersonaName: "string", "id#": "string", Outof: "string", FillColor: "color" } };
const artboardViewModelInstances = { Main: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Cassette: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cassette Icon": [], Cat: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Cat Icon": [], Banana: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Banana Icon": [], "Duck Icon": [], Duck: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Snail Icon": [], Snail: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Origami Icon": [], Origami: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Disco Icon": [], Disco: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Capybara: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Capybara Icon": [], Donut: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Donut Icon": [], "Bonsai Icon": [], Bonsai: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], "Globe Single Line": [], "Card Back": ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Knickknack: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"], Globe: [], Card: ["Bonsai", "Cassette-reducedMotion", "Cat-reducedMotion", "Banana-reducedMotion", "Duck-reducedMotion", "Snail-reducedMotion", "Origami-reducedMotion", "Disco-reducedMotion", "Capybara-reducedMotion", "Donut-reducedMotion", "Bonsai-reducedMotion", "Donut", "Capybara", "Disco", "Origami", "Snail", "Duck", "Banana", "Cat", "Cassette"] };
let ReactCompilerGating = fn(558);
let obj = {
  Main: ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const tmpResult = BaseRive;
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const tmpResult8 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult9 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult10 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult11 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult12 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult13 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }) : ((reducedMotionEnabled) => {
    ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    let Icon;
    if (dataBinding != null) {
      Icon = dataBinding.Icon;
    }
    const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
    let Illustration;
    if (dataBinding != null) {
      Illustration = dataBinding.Illustration;
    }
    const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
    const tmpResult = BaseRive;
    let AnimationState;
    if (dataBinding != null) {
      AnimationState = dataBinding.AnimationState;
    }
    let AnimationState1;
    if (onDataBindingChange != null) {
      AnimationState1 = onDataBindingChange.AnimationState;
    }
    const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
    const tmpResult8 = BaseRive;
    let PowerMeter;
    if (dataBinding != null) {
      PowerMeter = dataBinding.PowerMeter;
    }
    let PowerMeter1;
    if (onDataBindingChange != null) {
      PowerMeter1 = onDataBindingChange.PowerMeter;
    }
    const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
    const tmpResult9 = BaseRive;
    let LVL;
    if (dataBinding != null) {
      LVL = dataBinding.LVL;
    }
    let LVL1;
    if (onDataBindingChange != null) {
      LVL1 = onDataBindingChange.LVL;
    }
    const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
    const tmpResult10 = BaseRive;
    let PersonaName;
    if (dataBinding != null) {
      PersonaName = dataBinding.PersonaName;
    }
    let PersonaName1;
    if (onDataBindingChange != null) {
      PersonaName1 = onDataBindingChange.PersonaName;
    }
    const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
    const tmpResult11 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["id#"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["id#"];
    }
    const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
    const tmpResult12 = BaseRive;
    let Outof;
    if (dataBinding != null) {
      Outof = dataBinding.Outof;
    }
    let Outof1;
    if (onDataBindingChange != null) {
      Outof1 = onDataBindingChange.Outof;
    }
    const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
    const tmpResult13 = BaseRive;
    let FillColor;
    if (dataBinding != null) {
      FillColor = dataBinding.FillColor;
    }
    let FillColor1;
    if (onDataBindingChange != null) {
      FillColor1 = onDataBindingChange.FillColor;
    }
    const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
    return null;
  }),
  Cassette: null,
  Cat: null,
  Banana: null,
  Duck: null,
  Snail: null,
  Origami: null,
  Disco: null,
  Capybara: null,
  Donut: null,
  Bonsai: null,
  "Card Back": null,
  Knickknack: null,
  Card: null
};
ReactCompilerGating = fn(558);
obj.Cassette = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Cat = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Banana = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Duck = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Snail = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Origami = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Disco = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Capybara = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Donut = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Bonsai = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj["Card Back"] = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Knickknack = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Card = ReactCompilerGating.isReactCompilerEnabled() ? ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
}) : ((reducedMotionEnabled) => {
  ({ instance, file, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let Icon;
  if (dataBinding != null) {
    Icon = dataBinding.Icon;
  }
  const artboardBinding = BaseRive.useArtboardBinding("Icon", instance, file, Icon, playIfNeeded);
  let Illustration;
  if (dataBinding != null) {
    Illustration = dataBinding.Illustration;
  }
  const artboardBinding1 = BaseRive.useArtboardBinding("Illustration", instance, file, Illustration, playIfNeeded);
  const tmpResult = BaseRive;
  let AnimationState;
  if (dataBinding != null) {
    AnimationState = dataBinding.AnimationState;
  }
  let AnimationState1;
  if (onDataBindingChange != null) {
    AnimationState1 = onDataBindingChange.AnimationState;
  }
  const numberBinding = BaseRive.useNumberBinding("AnimationState", instance, AnimationState, AnimationState1, playIfNeeded);
  const tmpResult8 = BaseRive;
  let PowerMeter;
  if (dataBinding != null) {
    PowerMeter = dataBinding.PowerMeter;
  }
  let PowerMeter1;
  if (onDataBindingChange != null) {
    PowerMeter1 = onDataBindingChange.PowerMeter;
  }
  const numberBinding1 = BaseRive.useNumberBinding("PowerMeter", instance, PowerMeter, PowerMeter1, playIfNeeded);
  const tmpResult9 = BaseRive;
  let LVL;
  if (dataBinding != null) {
    LVL = dataBinding.LVL;
  }
  let LVL1;
  if (onDataBindingChange != null) {
    LVL1 = onDataBindingChange.LVL;
  }
  const stringBinding = BaseRive.useStringBinding("LVL", instance, LVL, LVL1, playIfNeeded);
  const tmpResult10 = BaseRive;
  let PersonaName;
  if (dataBinding != null) {
    PersonaName = dataBinding.PersonaName;
  }
  let PersonaName1;
  if (onDataBindingChange != null) {
    PersonaName1 = onDataBindingChange.PersonaName;
  }
  const stringBinding1 = BaseRive.useStringBinding("PersonaName", instance, PersonaName, PersonaName1, playIfNeeded);
  const tmpResult11 = BaseRive;
  let prop;
  if (dataBinding != null) {
    prop = dataBinding["id#"];
  }
  let prop1;
  if (onDataBindingChange != null) {
    prop1 = onDataBindingChange["id#"];
  }
  const stringBinding2 = BaseRive.useStringBinding("id#", instance, prop, prop1, playIfNeeded);
  const tmpResult12 = BaseRive;
  let Outof;
  if (dataBinding != null) {
    Outof = dataBinding.Outof;
  }
  let Outof1;
  if (onDataBindingChange != null) {
    Outof1 = onDataBindingChange.Outof;
  }
  const stringBinding3 = BaseRive.useStringBinding("Outof", instance, Outof, Outof1, playIfNeeded);
  const tmpResult13 = BaseRive;
  let FillColor;
  if (dataBinding != null) {
    FillColor = dataBinding.FillColor;
  }
  let FillColor1;
  if (onDataBindingChange != null) {
    FillColor1 = onDataBindingChange.FillColor;
  }
  const colorBinding = BaseRive.useColorBinding("FillColor", instance, FillColor, FillColor1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
let closure_11 = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = require("c").c(18);
  if (cResult[0] !== arg0) {
    ({ fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    _require = dataBinding;
    importDefault = onDataBindingChange;
    cResult[0] = arg0;
    class V {
      constructor(arg0) {
        tmp = closure_10[closure_2];
        tmp2 = null;
        if (null != tmp) {
          tmp3 = arg0;
          tmp4 = jsx;
          obj = {};
          tmp5 = obj;
          merged = Object.assign(arg0);
          tmp7 = closure_0;
          obj.dataBinding = closure_0;
          tmp8 = closure_1;
          obj.onDataBindingChange = closure_1;
          tmp2 = jsx(tmp, obj);
        }
        return tmp2;
      }
    }
    cResult[2] = onDataBindingChange;
    cResult[3] = tmp12;
    cResult[4] = stateMachine;
    cResult[5] = artboard;
    cResult[6] = defaultViewModelInstance;
    let tmp9 = defaultViewModelInstance;
    let tmp8 = artboard;
    let tmp7 = stateMachine;
    let tmp6 = tmp12;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  str = "Main";
  if (undefined !== tmp8) {
    str = tmp8;
  }
  let str2 = "Bonsai";
  if (undefined !== tmp9) {
    str2 = tmp9;
  }
  if (cResult[7] === str) {
    if (cResult[8] === dataBinding) {
      if (cResult[9] === onDataBindingChange) {
        let tmp13 = cResult[10];
      }
      if (cResult[11] === str) {
        if (cResult[12] === str2) {
          if (cResult[13] === ref) {
            if (cResult[14] === tmp13) {
              if (cResult[15] === tmp6) {
                if (cResult[16] === tmp7) {
                  let tmp15 = cResult[17];
                }
                return tmp15;
              }
            }
          }
        }
      }
      const obj2 = { ref, src: require("module_4675"), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: null, stateMachine: null, renderDataBinding: null };
      class V {
        constructor(arg0) {
          tmp = closure_10[closure_2];
          tmp2 = null;
          if (null != tmp) {
            tmp3 = arg0;
            tmp4 = jsx;
            obj = {};
            tmp5 = obj;
            merged = Object.assign(arg0);
            tmp7 = closure_0;
            obj.dataBinding = closure_0;
            tmp8 = closure_1;
            obj.onDataBindingChange = closure_1;
            tmp2 = jsx(tmp, obj);
          }
          return tmp2;
        }
      }
      obj2.stateMachine = tmp7;
      obj2.renderDataBinding = tmp13;
      let merged = Object.assign(tmp6);
      const tmp23 = jsx(tmp(tmp2[4]).BaseRive, { ref, src: require("module_4675"), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: null, stateMachine: null, renderDataBinding: null });
      cResult[11] = str;
      cResult[12] = str2;
      cResult[13] = ref;
      cResult[14] = tmp13;
      cResult[15] = tmp6;
      cResult[16] = tmp7;
      cResult[17] = tmp23;
      tmp15 = tmp23;
    }
  }
  class V {
    constructor(arg0) {
      tmp = closure_10[closure_2];
      tmp2 = null;
      if (null != tmp) {
        tmp3 = arg0;
        tmp4 = jsx;
        obj = {};
        tmp5 = obj;
        merged = Object.assign(arg0);
        tmp7 = closure_0;
        obj.dataBinding = closure_0;
        tmp8 = closure_1;
        obj.onDataBindingChange = closure_1;
        tmp2 = jsx(tmp, obj);
      }
      return tmp2;
    }
  }
  cResult[7] = str;
  cResult[8] = dataBinding;
  cResult[9] = onDataBindingChange;
  cResult[10] = V;
  tmp13 = V;
  obj = require("c");
  tmp = _require;
}) : ((defaultViewModelInstance, ref) => {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Main";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Bonsai";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = noop.useCallback((arg0) => {
    let tmp2 = null;
    if (null != obj[str]) {
      obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = <tmp />;
    }
    return tmp2;
  }, items);
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_4);
  let merged = Object.assign(tmp);
  return jsx(str(onDataBindingChange[4]).BaseRive, { ref, src: dataBinding(onDataBindingChange[6]), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
}));
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointCardRive.tsx");

export const CheckpointCardRive = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((fallback, ref) => {
  const cResult = c.c(6);
  if (cResult[0] === fallback) {
    if (cResult[1] === ref) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === fallback.fallback) {
      if (cResult[4] === tmp4) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj2 = { fallback: fallback.fallback, children: tmp4 };
    const tmp9 = jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
    cResult[3] = fallback.fallback;
    cResult[4] = tmp4;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const merged = Object.assign(fallback);
  const tmp6 = <closure_11 ref={ref} />;
  cResult[0] = fallback;
  cResult[1] = ref;
  cResult[2] = tmp6;
  tmp4 = tmp6;
  const obj3 = { ref };
}) : ((fallback, ref) => {
  obj = { fallback: fallback.fallback, children: null };
  const merged = Object.assign(fallback);
  obj.children = <closure_11 ref={ref} />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
}));