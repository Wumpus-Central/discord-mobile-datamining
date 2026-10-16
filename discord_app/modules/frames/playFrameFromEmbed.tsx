// discord_app/modules/frames/playFrameFromEmbed.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import FramesStore from "FramesStore.tsx";

const require = fn;
let closure_8 = async function _playFrameFromEmbed(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ application: closure_129_0, analyticsContext: closure_129_1 } = closure_0);
          closure_129_2 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "test", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else if (
            (function shouldOpenAppChannel(conjureProjectId) {
              let tmp = null != conjureProjectId.conjureProjectId;
              if (tmp) {
                tmp = null == frame.getFrame(closure_1_6(conjureProjectId.id, closure_1_5));
              }
              return tmp;
            })(closure_129_0)
          ) {
            c3 = 2;
            c4 = 1;
            const obj9 = {
              value: closure_130_0(closure_130_2[4]).fetchApplicationChannels(closure_129_0.id),
              done: false,
            };
            return obj9;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const first = value[0];
        }
        closure_129_2 = first;
        if (null != closure_129_2) {
          const obj10 = {
            applicationId: closure_129_0.id,
            surface: null,
            analyticsContext: null,
            showErrorModal: false,
          };
          const obj11 = {
            type: closure_130_0(closure_130_2[6]).EmbeddedSurfaceType.APP_CHANNEL,
            channelId: closure_129_2.channel_id,
            guildId: closure_129_2.guild_id,
          };
          obj10.surface = obj11;
          obj10.analyticsContext = closure_129_1;
          const obj4 = closure_130_1(closure_130_2[5]);
          closure_130_1(closure_130_2[5])
            .launchFrame(obj10)
            .catch(() => {});
          const launchFrameResult = closure_130_1(closure_130_2[5]).launchFrame(obj10);
          closure_130_0(closure_130_2[7]).transitionTo(
            closure_130_7.CHANNEL(closure_129_2.guild_id, closure_129_2.channel_id),
          );
          const obj7 = closure_130_0(closure_130_2[7]);
        } else {
          const obj12 = { applicationId: closure_129_0.id, surface: closure_130_5, analyticsContext: closure_129_1 };
          closure_130_1(closure_130_2[5]).launchFrame(obj12);
          const obj2 = closure_130_1(closure_130_2[5]);
        }
        c4 = 3;
      }
    } catch (tmp41) {
      c4 = tmp;
      throw tmp41;
    }
  }
};
const FramesConstants = fn(10934);
({ MAIN_SURFACE: hasOwnProperty, makeFrameId: metroRequire } = FramesConstants);
const Routes = fn(1087).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/playFrameFromEmbed.tsx");

export default function playFrameFromEmbed() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
