// discord_app/modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx
import Fragment from "../../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../../_runtime/00576_react.js";
import ReanimatedRexportDefault from "../../../../../../reanimated/ReanimatedRexport.tsx";
import useFontScale from "../../../../../../screen/native/useFontScale.tsx";
import usePlaceholderStyles from "../../../../hooks/usePlaceholderStyles.tsx";
import SearchListCard from "../../../list/SearchListCard.tsx";
import react from "../../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let containerStyle;
      let imageStyle;
      const obj = react2;
      const cResult = obj.c(11);
      ({ imageStyle, containerStyle } = arg0);
      const obj2 = usePlaceholderStyles;
      const placeholderAnimatedStyle = obj2.usePlaceholderAnimatedStyle(true);
      const width = imageStyle.width;
      const obj3 = useFontScale;
      const sum = imageStyle.height + 108 * obj3.useFontScale();
      if (cResult[0] === sum) {
        let tmp6;
        if (cResult[1] === width) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === placeholderAnimatedStyle) {
          let tmp7;
          let tmp8;
          if (cResult[4] === containerStyle) {
            tmp7 = cResult[5];
          }
          if (cResult[6] !== tmp6) {
            const tmp10 = jsx(SearchListCard.SearchListCardContainer, { containerStyle: tmp6 });
            cResult[6] = tmp6;
            cResult[7] = tmp10;
            tmp8 = tmp10;
          } else {
            tmp8 = cResult[7];
          }
          if (cResult[8] === tmp7) {
            let tmp11;
            if (cResult[9] === tmp8) {
              tmp11 = cResult[10];
            }
            return tmp11;
          }
          const tmp14 = jsx(ReanimatedRexportDefault.View, { style: tmp7, pointerEvents: "none", children: tmp8 });
          cResult[8] = tmp7;
          cResult[9] = tmp8;
          cResult[10] = tmp14;
          tmp11 = tmp14;
        }
        const items = [containerStyle, placeholderAnimatedStyle];
        cResult[3] = placeholderAnimatedStyle;
        cResult[4] = containerStyle;
        cResult[5] = items;
        tmp7 = items;
      }
      size = { width, height: sum };
      cResult[0] = sum;
      cResult[1] = width;
      cResult[2] = size;
      tmp6 = size;
    }
  : (imageStyle) => {
      imageStyle = imageStyle.imageStyle;
      const containerStyle = imageStyle.containerStyle;
      const obj = usePlaceholderStyles;
      const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
      const width = imageStyle.width;
      const obj2 = useFontScale;
      const sum = imageStyle.height + 108 * obj2.useFontScale();
      let c1 = sum;
      const items = [width, sum];
      const memo = react.useMemo(() => {
        size = { width, height };
        return size;
      }, items);
      const items1 = [containerStyle, placeholderAnimatedStyle];
      const View = ReanimatedRexportDefault.View;
      return (
        <View style={items1} pointerEvents="none">
          {null}
        </View>
      );
    };
let size = size_mod;
const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx",
);

export default tmp2;
