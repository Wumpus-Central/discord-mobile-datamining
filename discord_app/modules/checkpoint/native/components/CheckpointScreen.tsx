// discord_app/modules/checkpoint/native/components/CheckpointScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const CHECKPOINT_NAV_HEIGHT = fn(5115).CHECKPOINT_NAV_HEIGHT;
const jsx = fn(21).jsx;
const PX_24 = nativeDefault.space.PX_24;
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles({
  container: { height: "100%", width: "100%" },
  scroll: { width: "100%" },
  scrollContent: { flexGrow: 1 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(15);
      children = children.children;
      const tmp2 = closure_9();
      const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
      const sum = insets.left + PX_24;
      const sum1 = insets.right + PX_24;
      const sum2 = insets.bottom + nativeDefault.space.PX_24;
      const sum3 = insets.top + CHECKPOINT_NAV_HEIGHT;
      if (cResult[0] === sum) {
        if (cResult[1] === sum1) {
          if (cResult[2] === sum2) {
            if (cResult[3] === sum3) {
              let tmp7 = cResult[4];
            }
            if (cResult[5] === tmp7) {
              if (cResult[6] === tmp2.scrollContent) {
                let tmp8 = cResult[7];
              }
              if (cResult[8] === children) {
                if (cResult[9] === tmp2.scroll) {
                  if (cResult[10] === tmp8) {
                    let tmp9 = cResult[11];
                  }
                  if (cResult[12] === tmp2.container) {
                    if (cResult[13] === tmp9) {
                      let tmp13 = cResult[14];
                    }
                    return tmp13;
                  }
                  const obj2 = { style: tmp2.container, children: tmp9 };
                  const tmp16 = <hasOwnProperty style={tmp2.container}>{tmp9}</hasOwnProperty>;
                  cResult[12] = tmp2.container;
                  cResult[13] = tmp9;
                  cResult[14] = tmp16;
                  tmp13 = tmp16;
                }
              }
              const obj3 = {
                style: tmp2.scroll,
                contentContainerStyle: tmp8,
                showsVerticalScrollIndicator: false,
                children,
              };
              const tmp12 = (
                <React4 style={tmp2.scroll} contentContainerStyle={tmp8} showsVerticalScrollIndicator={false}>
                  {children}
                </React4>
              );
              cResult[8] = children;
              cResult[9] = tmp2.scroll;
              cResult[10] = tmp8;
              cResult[11] = tmp12;
              tmp9 = tmp12;
            }
            const items = [tmp2.scrollContent, tmp7];
            cResult[5] = tmp7;
            cResult[6] = tmp2.scrollContent;
            cResult[7] = items;
            tmp8 = items;
          }
        }
      }
      const obj4 = { paddingLeft: sum, paddingRight: sum1, paddingBottom: sum2, paddingTop: sum3 };
      cResult[0] = sum;
      cResult[1] = sum1;
      cResult[2] = sum2;
      cResult[3] = sum3;
      cResult[4] = obj4;
      tmp7 = obj4;
    }
  : (children) => {
      const tmp = closure_9();
      const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
      const items = [, , ,];
      ({ bottom: arr[0], left: arr[1], right: arr[2], top: arr[3] } = insets);
      const obj = { style: tmp.container, children: null };
      const obj2 = {
        style: tmp.scroll,
        contentContainerStyle: null,
        showsVerticalScrollIndicator: false,
        children: null,
      };
      const items1 = [
        tmp.scrollContent,
        noop.useMemo(
          () => ({
            paddingLeft: insets.left + PX_24,
            paddingRight: insets.right + PX_24,
            paddingBottom: insets.bottom + nativeDefault.space.PX_24,
            paddingTop: insets.top + CHECKPOINT_NAV_HEIGHT,
          }),
          items,
        ),
      ];
      obj2.contentContainerStyle = items1;
      obj2.children = children.children;
      obj.children = (
        <closure_4 style={tmp.scroll} contentContainerStyle={null} showsVerticalScrollIndicator={false}>
          {null}
        </closure_4>
      );
      return <closure_5 style={tmp.container}>{null}</closure_5>;
    };
