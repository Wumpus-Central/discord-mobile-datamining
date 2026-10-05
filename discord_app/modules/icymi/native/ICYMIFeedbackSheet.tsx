// discord_app/modules/icymi/native/ICYMIFeedbackSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl8 from "../../../intl/index.native.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import FeedbackActionSheetDefault from "../../feedback/native/FeedbackActionSheet.tsx";
import ICYMIAnalytics2 from "../ICYMIAnalytics.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let tmp11;
      let tmp6;
      let tmp7;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl8.intl;
        const stringResult = intl.string(intl8.t["ppfH9+"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl8.intl;
        const stringResult1 = intl2.string(intl8.t["ePk/Cf"]);
        const intl3 = intl8.intl;
        const stringResult2 = intl3.string(intl8.t.sBOuOf);
        let obj2 = { label: intl4.string(intl8.t.F6TmZA), value: "irrelevant_content" };
        intl4 = intl8.intl;
        let items = [obj2, , , ,];
        const obj3 = { label: intl5.string(intl8.t.voWAzi), value: "not_enough_content" };
        intl5 = intl8.intl;
        items[1] = obj3;
        const obj4 = { label: intl6.string(intl8.t.Ay8iwx), value: "too_much_content" };
        intl6 = intl8.intl;
        items[2] = obj4;
        const obj5 = { label: intl7.string(intl8.t["Yu+52W"]), value: "laggy" };
        intl7 = intl8.intl;
        items[3] = obj5;
        items[4] = { label: "Other", value: "other" };
        cResult[1] = stringResult1;
        cResult[2] = stringResult2;
        cResult[3] = items;
        tmp8 = items;
        tmp7 = stringResult2;
        tmp6 = stringResult1;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        FeedbackActionSheetDefault;
        const tmp15 = (
          <tmp14
            headerLabel={first}
            showHeaderCloseButton
            hideDontShowAgainCheckbox
            ratingsBodyLabel={tmp6}
            reasonsHeaderLabel={tmp7}
            reasons={tmp8}
            otherKey="other"
            trackOpen={ICYMIAnalytics2.ICYMIAnalytics.trackFeedFeedbackPromptViewed}
            feedbackReasons={["other"]}
            trackReport={function trackReport(reason) {
              let rating;
              const obj = ICYMIActionCreatorsDefault;
              obj.giveFeedback();
              const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
              let tmp2;
              const trackFeedFeedbackSubmitted = ICYMIAnalytics.trackFeedFeedbackSubmitted;
              if (null != reason.reason) {
                const items = [reason.reason.value];
                tmp2 = items;
              }
              const obj2 = { reason_descriptions: tmp2, rating, user_feedback: reason.feedback };
              rating = reason.rating;
              const result = trackFeedFeedbackSubmitted(obj2);
            }}
          />
        );
        cResult[4] = tmp15;
        tmp11 = tmp15;
      } else {
        tmp11 = cResult[4];
      }
      return tmp11;
    }
  : () => {
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      FeedbackActionSheetDefault;
      const intl = intl8.intl;
      const intl2 = intl8.intl;
      const intl3 = intl8.intl;
      let obj2 = { label: intl4.string(intl8.t.F6TmZA), value: "irrelevant_content" };
      intl4 = intl8.intl;
      let items = [obj2, , , ,];
      const obj3 = { label: intl5.string(intl8.t.voWAzi), value: "not_enough_content" };
      intl5 = intl8.intl;
      items[1] = obj3;
      const obj4 = { label: intl6.string(intl8.t.Ay8iwx), value: "too_much_content" };
      intl6 = intl8.intl;
      items[2] = obj4;
      const obj5 = { label: intl7.string(intl8.t["Yu+52W"]), value: "laggy" };
      intl7 = intl8.intl;
      items[3] = obj5;
      items[4] = { label: "Other", value: "other" };
      return (
        <tmp
          headerLabel={intl.string(intl8.t["ppfH9+"])}
          showHeaderCloseButton
          hideDontShowAgainCheckbox
          ratingsBodyLabel={intl2.string(intl8.t["ePk/Cf"])}
          reasonsHeaderLabel={intl3.string(intl8.t.sBOuOf)}
          reasons={items}
          otherKey="other"
          trackOpen={ICYMIAnalytics2.ICYMIAnalytics.trackFeedFeedbackPromptViewed}
          feedbackReasons={["other"]}
          trackReport={function trackReport(reason) {
            let rating;
            const obj = ICYMIActionCreatorsDefault;
            obj.giveFeedback();
            const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
            let tmp2;
            const trackFeedFeedbackSubmitted = ICYMIAnalytics.trackFeedFeedbackSubmitted;
            if (null != reason.reason) {
              const items = [reason.reason.value];
              tmp2 = items;
            }
            const obj2 = { reason_descriptions: tmp2, rating, user_feedback: reason.feedback };
            rating = reason.rating;
            const result = trackFeedFeedbackSubmitted(obj2);
          }}
        />
      );
    };
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIFeedbackSheet.tsx");

export default tmp3;
