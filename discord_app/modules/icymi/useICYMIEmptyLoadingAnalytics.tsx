// discord_app/modules/icymi/useICYMIEmptyLoadingAnalytics.tsx
import ICYMIAnalytics3 from "ICYMIAnalytics.tsx";
import react_mod from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let ref;
      _require = arg0;
      dependencyMap = arg1;
      let obj = require("react");
      const cResult = obj.c(7);
      react = react.useRef(null);
      if (cResult[0] === arg1) {
        let tmp2;
        let tmp3;
        let tmp6;
        let tmp5;
        if (cResult[1] === arg0) {
          tmp2 = cResult[2];
          tmp3 = cResult[3];
        }
        const effect = obj2.useEffect(tmp2, tmp3);
        if (cResult[4] !== arg1) {
          const fn2 = function s() {
            if (!closure_1) {
              if (null != ref.current) {
                const _Date = Date;
                const diff = Date.now() - ref.current;
                const ICYMIAnalytics = ICYMIAnalytics3.ICYMIAnalytics;
                const obj = { dwellTimeMs: diff };
                const result = ICYMIAnalytics.trackFeedEmptyLoadingAbandoned(obj);
                ref.current = null;
              }
            }
          };
          const items = [arg1];
          cResult[4] = arg1;
          cResult[5] = fn2;
          cResult[6] = items;
          tmp6 = items;
          tmp5 = fn2;
        } else {
          tmp5 = cResult[5];
          tmp6 = cResult[6];
        }
        const effect1 = obj2.useEffect(tmp5, tmp6);
      }
      const fn = function c() {
        if (closure_1) {
          if (closure_0) {
            const _Date = Date;
            ref.current = Date.now();
            const ICYMIAnalytics = ICYMIAnalytics3.ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedEmptyLoadingSeen();
          } else if (null != ref.current) {
            const _Date2 = Date;
            const diff = Date.now() - ref.current;
            const ICYMIAnalytics2 = ICYMIAnalytics3.ICYMIAnalytics;
            const obj = { dwellTimeMs: diff };
            const result1 = ICYMIAnalytics2.trackFeedEmptyLoadingComplete(obj);
            ref.current = null;
          }
        }
      };
      const items1 = [arg0, arg1];
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = fn;
      cResult[3] = items1;
      tmp3 = items1;
      tmp2 = fn;
    }
  : (arg0, arg1) => {
      let ref;
      let closure_0 = arg0;
      let closure_1 = arg1;
      react = react.useRef(null);
      const items = [arg0, arg1];
      const effect = react.useEffect(() => {
        if (closure_1) {
          if (closure_0) {
            const _Date = Date;
            ref.current = Date.now();
            const ICYMIAnalytics = ICYMIAnalytics3.ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedEmptyLoadingSeen();
          } else if (null != ref.current) {
            const _Date2 = Date;
            const diff = Date.now() - ref.current;
            const ICYMIAnalytics2 = ICYMIAnalytics3.ICYMIAnalytics;
            const obj = { dwellTimeMs: diff };
            const result1 = ICYMIAnalytics2.trackFeedEmptyLoadingComplete(obj);
            ref.current = null;
          }
        }
      }, items);
      const items1 = [arg1];
      const effect1 = react.useEffect(() => {
        if (!closure_1) {
          if (null != ref.current) {
            const _Date = Date;
            const diff = Date.now() - ref.current;
            const ICYMIAnalytics = ICYMIAnalytics3.ICYMIAnalytics;
            const obj = { dwellTimeMs: diff };
            const result = ICYMIAnalytics.trackFeedEmptyLoadingAbandoned(obj);
            ref.current = null;
          }
        }
      }, items1);
    };
let result = size.fileFinishedImporting("modules/icymi/useICYMIEmptyLoadingAnalytics.tsx");

export const useICYMIEmptyLoadingAnalytics = tmp2;
