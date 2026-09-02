// discord_app/modules/scheduled_messages/native/ScheduledMessageEditContentModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/ChannelStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { modal: null, headerLeftContainer: null, headerRightContainer: null, container: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: ThemesDefault.space.PX_16 };
let obj1 = { paddingLeft: ThemesDefault.space.PX_16 };
createCacheKey[2] = { paddingRight: ThemesDefault.space.PX_16 };
let obj2 = { paddingRight: ThemesDefault.space.PX_16 };
createCacheKey[3] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_24 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const obj3 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_24 };
const result = require("set").fileFinishedImporting(
  "modules/scheduled_messages/native/ScheduledMessageEditContentModal.tsx",
);

export default function ScheduledMessageEditContentModal(scheduledMessage) {
  scheduledMessage = scheduledMessage.scheduledMessage;
  let channelId;
  let stateFromStores;
  let first;
  let callback;
  let React;
  const tmp = callback2();
  channelId = scheduledMessage.createArgs.channelId;
  let obj = scheduledMessage(stateFromStores[10]);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getChannel(channelId));
  const tmp7 = callback(
    React.useState(() => {
      const obj = channelId(stateFromStores[11]);
      return obj.unparse(
        scheduledMessage(stateFromStores[12]).unparseContentAndFlagsForSilentMessage(scheduledMessage.createArgs),
        channelId,
      );
    }),
    2,
  );
  first = tmp7[0];
  const items1 = [stateFromStores, first, scheduledMessage.createArgs.flags, scheduledMessage.scheduledMessageId];
  callback = React.useCallback(
    first(function* () {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp4;
              const obj5 = v0(7436);
              obj1 = { content: null, flags: null };
              obj1[0] = obj5.parse(dependencyMap, closure_1_3).content;
              obj1[1] = closure_1_0.createArgs.flags;
              v0 = 1;
              dependencyMap = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = closure_1_0(12001).editScheduledMessage(closure_1_0.scheduledMessageId, obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            if (arg1) {
              let arr = v0(4723);
              arr = arr.pop();
            }
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          dependencyMap = tmp;
          throw tmp9;
        }
      }
    }),
    items1,
  );
  let intl = scheduledMessage(stateFromStores[15]).intl;
  const stringResult = intl.string(scheduledMessage(stateFromStores[15]).t.ZXE1s4);
  React = stringResult;
  obj = { style: tmp.modal, children: null };
  obj = {
    title: stringResult,
    headerTitle() {
      return closure_1_8(scheduledMessage(stateFromStores[17]).GenericHeaderTitle, { title: c5 });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerRight: null,
  };
  const tmp10 = closure_9;
  const tmp4 = channelId(stateFromStores[9])();
  let num = 0;
  if (!obj4.isIOS()) {
    num = channelId(stateFromStores[8])().top;
  }
  obj[3] = num + channelId(stateFromStores[7]).space.PX_8;
  obj4 = scheduledMessage(stateFromStores[18]);
  obj[4] = scheduledMessage(stateFromStores[19]).getHeaderCloseButton(channelId(stateFromStores[14]).pop);
  ({ headerLeftContainer: obj3[5], headerRightContainer: obj3[6] } = tmp);
  obj[7] = function headerRight() {
    let obj = { accessibilityRole: "button", onPress: closure_4, children: null };
    obj = { variant: "text-md/semibold", color: "control-brand-foreground", children: null };
    const intl = scheduledMessage(stateFromStores[15]).intl;
    obj[2] = intl.string(scheduledMessage(stateFromStores[15]).t["R3BPH+"]);
    obj[2] = closure_1_8(scheduledMessage(stateFromStores[21]).Text, obj);
    return closure_1_8(scheduledMessage(stateFromStores[20]).PressableOpacity, obj);
  };
  const items2 = [closure_8(scheduledMessage(stateFromStores[16]).Header, obj)];
  const tmp5Result = scheduledMessage(stateFromStores[19]);
  items2[1] = closure_8(View, {
    style: tmp.container,
    children: closure_8(scheduledMessage(stateFromStores[22]).TextArea, {
      accessibilityLabel: stringResult,
      value: first,
      onChange: tmp7[1],
      maxLength: tmp4,
      autoFocus: true,
    }),
  });
  obj[1] = items2;
  return tmp10(View, obj);
}
