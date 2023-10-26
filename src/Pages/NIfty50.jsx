import React from "react";
import {
  List,
  ListItem,
  Card,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";

function NIfty50() {
  return (
    <div className="h-screen w-screen flex p-10 ">
      <Card className="w-full h-full bg-gray-100 shadow-xl p-4 gap-3  rounded-xl">
        <List>
          <ListItem className="flex justify-between p-5">
            <ListItemPrefix>
              <p>hello</p>
            </ListItemPrefix>
            <ListItemSuffix>
              <p>hello</p>
            </ListItemSuffix>
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

export default NIfty50;
