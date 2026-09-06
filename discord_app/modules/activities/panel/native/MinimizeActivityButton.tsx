// discord_app/modules/activities/panel/native/MinimizeActivityButton.tsx
import _modDef11154 from "../../../../../_runtime/metro/11154__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ buttonParent: { flexShrink: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/MinimizeActivityButton.tsx");

export default noop.memo(function MinimizeActivityButton(arg0) {
  ({ activityName, setMode } = arg0);
  const items = [setMode];
  const callback = noop.useCallback(() => {
    setMode(ActivityPanelModes.PIP);
  }, items);
  if (undefined !== activityName) {
    if ("" !== activityName) {
      let obj = { style: tmp2.buttonParent, children: null };
      obj = {
        icon: _modDef11154,
        accessibilityLabel: null,
        onPress: null,
        text: null,
        size: "sm",
        variant: "secondary-overlay",
        maxFontSizeMultiplier: 1,
        shrink: true,
      };
      const intl2 = setMode(1114).intl;
      obj.accessibilityLabel = intl2.string(setMode(1114).t.brPQ5U);
      obj.onPress = callback;
      obj.text = activityName;
      obj.children = jsx(setMode(4975).Button, {
        icon: _modDef11154,
        accessibilityLabel: null,
        onPress: null,
        text: null,
        size: "sm",
        variant: "secondary-overlay",
        maxFontSizeMultiplier: 1,
        shrink: true,
      });
      let tmp3 = (
        <View
          icon={_modDef11154}
          accessibilityLabel={null}
          onPress={null}
          text={null}
          size="sm"
          variant="secondary-overlay"
          maxFontSizeMultiplier={1}
          shrink
        />
      );
    }
    return tmp3;
  }
  obj = {
    icon: _modDef11154,
    accessibilityLabel: null,
    onPress: null,
    size: "sm",
    variant: "secondary-overlay",
    maxFontSizeMultiplier: 1,
  };
  const intl = setMode(1114).intl;
  obj.accessibilityLabel = intl.string(setMode(1114).t.brPQ5U);
  obj.onPress = callback;
  tmp3 = jsx(setMode(8097).IconButton, {
    icon: _modDef11154,
    accessibilityLabel: null,
    onPress: null,
    size: "sm",
    variant: "secondary-overlay",
    maxFontSizeMultiplier: 1,
  });
});
