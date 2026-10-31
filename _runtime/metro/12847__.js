// _runtime/metro/12847__.js

export default function createConvertors(arg0) {
  closure_0 = arg0;
  return {
    fromPlainObject(arg0) {
      closure_0(arg0, {
        enter(children) {
          children = children.children;
          if (children) {
            children = children.children instanceof closure_1_0(12835) === false;
          }
          if (children) {
            const obj = new closure_1_0(12835)();
            children.children = obj.fromArray(children.children);
          }
        },
      });
      return arg0;
    },
    toPlainObject(arg0) {
      closure_0(arg0, {
        leave(children) {
          children = children.children;
          if (children) {
            children = children.children instanceof closure_1_0(closure_1_1[0]);
          }
          if (children) {
            const children2 = children.children;
            children.children = children2.toArray();
          }
        },
      });
      return arg0;
    },
  };
}
