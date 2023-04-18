import { Button as ButtonBase } from "./buttons";
import type { StoryDefault, Story } from "@ladle/react";
import "tailwindcss/tailwind.css";

export default {
  title: "Buttons",
  meta: {
    key: "value",
  },
} satisfies StoryDefault;

export const Button: Story<{
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "subtle"
    | "ghost"
    | "link"
    | null
    | undefined;
  size: "default" | "sm" | "lg" | null | undefined;
}> = ({ variant, size }) => (
  <ButtonBase variant={variant} size={size}>
    Test
  </ButtonBase>
);

Button.args = {
  variant: "default",
  size: "default",
};

Button.argTypes = {
  variant: {
    control: { type: "select" },
    options: ["default", "destructive", "outline", "subtle", "ghost", "link"],
    defaultValue: "default",
  },
  size: {
    control: { type: "select" },
    options: ["default", "sm", "lg"],
  },
};

// export const Button: Story = () => <ButtonBase>Test</ButtonBase>;
