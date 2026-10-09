// discord_app/modules/scheduled_messages/native/ScheduledMessageEditContentModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import MessageParserDefault from "../../messages/MessageParser.tsx";
import ScheduledMessageUtils from "../ScheduledMessageUtils.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  modal: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  headerLeftContainer: null,
  headerRightContainer: null,
  container: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
let obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj5 = { paddingRight: nativeDefault.space.PX_16 };
obj2.container = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageEditContentModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ScheduledMessageEditContentModal(scheduledMessage) {
      const cResult = require("c").c(33);
      scheduledMessage = scheduledMessage.scheduledMessage;
      _require = scheduledMessage;
      closure_10();
      const top = channelId(stateFromStores[10])().top;
      channelId(stateFromStores[11])();
      channelId = scheduledMessage.createArgs.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        class C {
          constructor() {
            return closure_7.getChannel(channelId);
          }
        }
        cResult[1] = channelId;
        cResult[2] = C;
      } else {
        class C {
          constructor() {
            return closure_7.getChannel(channelId);
          }
        }
      }
      let obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(first, C);
      if (cResult[3] === channelId) {
        class C {
          constructor() {
            return closure_7.getChannel(channelId);
          }
        }
        const first1 = _slicedToArray(noop.useState(fn), 2)[0];
        if (cResult[6] === stateFromStores) {
          class C {
            constructor() {
              return closure_7.getChannel(channelId);
            }
          }
        }
        _require = first1(function* () {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const obj5 = channelId(stateFromStores[13]);
                  const obj4 = { content: obj5.parse(c2, first1).content, flags: tmp4.createArgs.flags };
                  c1 = 1;
                  c2 = 1;
                  const obj7 = {
                    value: tmp4(stateFromStores[15]).editScheduledMessage(tmp4.scheduledMessageId, obj4),
                    done: false,
                  };
                  return obj7;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                if (value) {
                  channelId(stateFromStores[16]).pop();
                  const arr = channelId(stateFromStores[16]);
                }
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp9) {
              c2 = tmp;
              throw tmp9;
            }
          }
        });
        function t4() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[6] = stateFromStores;
        cResult[7] = first1;
        cResult[8] = scheduledMessage.createArgs.flags;
        cResult[9] = scheduledMessage.scheduledMessageId;
        cResult[10] = t4;
        const tmp12 = _slicedToArray(noop.useState(fn), 2);
      }
      fn = function v() {
        const obj = MessageParserDefault;
        return obj.unparse(
          ScheduledMessageUtils.unparseContentAndFlagsForSilentMessage(createArgs.createArgs),
          channelId,
        );
      };
      cResult[3] = channelId;
      cResult[4] = scheduledMessage.createArgs;
      cResult[5] = fn;
      const tmpResult = require("initialize");
    }
  : function ScheduledMessageEditContentModal(scheduledMessage) {
      scheduledMessage = scheduledMessage.scheduledMessage;
      let stateFromStores;
      _slicedToArray = undefined;
      noop = undefined;
      const tmp = closure_10();
      const channelId = scheduledMessage.createArgs.channelId;
      const tmp4 = channelId(stateFromStores[11])();
      const items = [ChannelStore];
      stateFromStores = scheduledMessage(stateFromStores[12]).useStateFromStores(items, () =>
        ChannelStore.getChannel(channelId),
      );
      const tmp7 = _slicedToArray(
        noop.useState(() => {
          const obj = MessageParserDefault;
          return obj.unparse(
            ScheduledMessageUtils.unparseContentAndFlagsForSilentMessage(scheduledMessage.createArgs),
            channelId,
          );
        }),
        2,
      );
      value = tmp7[0];
      const items1 = [stateFromStores, value, scheduledMessage.createArgs.flags, scheduledMessage.scheduledMessageId];
      _slicedToArray = noop.useCallback(
        value(function* () {
          if (dependencyMap === 2) {
            dependencyMap = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              dependencyMap = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  dependencyMap = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const obj5 = v1(7363);
                  const obj4 = {
                    content: obj5.parse(stateFromStores, first).content,
                    flags: scheduledMessage.createArgs.flags,
                  };
                  v1 = 1;
                  dependencyMap = 1;
                  const obj7 = {
                    value: tmp4(9265).editScheduledMessage(scheduledMessage.scheduledMessageId, obj4),
                    done: false,
                  };
                  return obj7;
                }
              } else if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                if (value) {
                  v1(5941).pop();
                  const arr = v1(5941);
                }
                dependencyMap = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp9) {
              dependencyMap = tmp;
              throw tmp9;
            }
          }
        }),
        items1,
      );
      let intl = scheduledMessage(stateFromStores[17]).intl;
      const stringResult = intl.string(scheduledMessage(stateFromStores[17]).t.ZXE1s4);
      noop = stringResult;
      let obj2 = { style: tmp.modal, children: null };
      let obj5 = {
        title: stringResult,
        headerTitle() {
          return closure_2_8(HeaderShared.GenericHeaderTitle, { title });
        },
        headerTitleAlign: "center",
        headerStatusBarHeight: null,
        headerLeft: null,
        headerLeftContainerStyle: null,
        headerRightContainerStyle: null,
        headerRight: null,
      };
      let obj = scheduledMessage(stateFromStores[12]);
      let num = 0;
      if (!obj4.isIOS()) {
        num = channelId(stateFromStores[10])().top;
      }
      obj5.headerStatusBarHeight = num + channelId(stateFromStores[7]).space.PX_8;
      obj4 = scheduledMessage(stateFromStores[19]);
      obj5.headerLeft = scheduledMessage(stateFromStores[20]).getHeaderCloseButton(channelId(stateFromStores[16]).pop);
      ({ headerLeftContainer: obj3.headerLeftContainerStyle, headerRightContainer: obj3.headerRightContainerStyle } =
        tmp);
      obj5.headerRight = function headerRight() {
        const obj = { accessibilityRole: "button", onPress, children: null };
        const obj2 = { variant: "text-md/semibold", color: "control-brand-foreground", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t["R3BPH+"]);
        obj.children = closure_2_8(Text_Text.Text, obj2);
        return closure_2_8(Pressables.PressableOpacity, obj);
      };
      const items2 = [closure_8(scheduledMessage(stateFromStores[23]).Header, obj5)];
      const tmp5Result = scheduledMessage(stateFromStores[20]);
      items2[1] = closure_8(View, {
        style: tmp.container,
        children: closure_8(scheduledMessage(stateFromStores[24]).TextArea, {
          accessibilityLabel: stringResult,
          value,
          onChange: tmp7[1],
          maxLength: tmp4,
          autoFocus: true,
        }),
      });
      obj2.children = items2;
      return closure_9(View, obj2);
    };
