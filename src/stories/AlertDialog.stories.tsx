import { AlertDialogDemo } from "@/ui/alert_dialog";
import type { StoryDefault, Story } from "@ladle/react";
import "tailwindcss/tailwind.css";

export default {
  title: "Welcome",
  meta: {
    key: "value",
  },
} satisfies StoryDefault;

export const AlertDialog: Story = () => <AlertDialogDemo />;
