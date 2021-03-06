import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Gitgraph } from "../Gitgraph";

storiesOf("3. Events", module)
  .add("on commit dot click", () => (
    <Gitgraph>
      {(gitgraph) => {
        const onClick = action("click on dot");

        const master = gitgraph.branch("master");
        master.commit({
          subject: "Hello",
          onClick,
        });
        master.commit({
          subject: "World",
          onClick,
        });
      }}
    </Gitgraph>
  ))
  .add("on commit dot mouseover", () => (
    <Gitgraph>
      {(gitgraph) => {
        const onMouseOver = action("mouse over dot");

        const master = gitgraph.branch("master");
        master.commit({ subject: "Hello", onMouseOver });
        master.commit({ subject: "World", onMouseOver });
      }}
    </Gitgraph>
  ))
  .add("on commit dot mouseout", () => (
    <Gitgraph>
      {(gitgraph) => {
        const onMouseOut = action("mouse out dot");

        const master = gitgraph.branch("master");
        master.commit({ subject: "Hello", onMouseOut });
        master.commit({ subject: "World", onMouseOut });
      }}
    </Gitgraph>
  ))
  .add("on commit message click", () => (
    <Gitgraph>
      {(gitgraph) => {
        const onMessageClick = action("click on message");

        const master = gitgraph.branch("master");
        master.commit({ subject: "Hello", onMessageClick });
        master.commit({ subject: "World", onMessageClick });
      }}
    </Gitgraph>
  ));
