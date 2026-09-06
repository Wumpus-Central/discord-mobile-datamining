// discord_app/components_native/common/ActionButton.tsx
import ButtonHooks from "../../design/components/Button/native/ButtonHooks.native.tsx";
import IconButton from "../../design/components/Button/native/IconButton.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/ActionButton.tsx");

export default function ActionButton(style) {
  let str = "tertiary";
  if ("positive" === style.type) {
    str = "active";
  }
  let obj = { style: style.styles, children: null };
  obj = {
    icon: <style.IconComponent color={obj.useButtonTextColorStyles(str).color} size="sm" />,
    onPress: null,
    accessibilityLabel: null,
    variant: str,
    size: "sm",
  };
  ({ onPress: obj3.onPress, accessibilityLabel: obj3.accessibilityLabel } = style);
  obj.children = jsx(IconButton.IconButton, {
    icon: <style.IconComponent color={obj.useButtonTextColorStyles(str).color} size="sm" />,
    onPress: null,
    accessibilityLabel: null,
    variant: str,
    size: "sm",
  });
  return (
    <View
      icon={<style.IconComponent color={obj.useButtonTextColorStyles(str).color} size="sm" />}
      onPress={null}
      accessibilityLabel={null}
      variant={str}
      size="sm"
    />
  );
}
