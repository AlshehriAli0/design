import type * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DeleteIcon,
  EditRowIcon,
  ExportIcon,
  PreviewIcon,
} from "@/components/design-system/icons"
import { BUTTON_ROLES, BUTTON_SIZES } from "@/lib/design-system/data"

const ICON_SIZES = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const

/** One glyph per role for its icon-only buttons. */
const ROLE_ICON: Record<string, React.ComponentType> = {
  default: PreviewIcon,
  outline: ExportIcon,
  ghost: EditRowIcon,
  destructive: DeleteIcon,
}

/**
 * Every role at every size, shown the way the lab's index shows a mockup: inside the
 * browser-window frame, as a grid of hairline cells — a role per column, a size per row,
 * and the four icon-only sizes in the last row. The guidance behind each one still
 * ships in the design-system file (design-system-md.ts).
 */
export function ButtonShowcase() {
  return (
    <article className="site-window flex flex-col">
      <div className="flex items-center gap-3 px-3 pt-1 pb-2">
        <div aria-hidden className="flex w-16 gap-1.5">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-warning/70" />
          <span className="size-2.5 rounded-full bg-success/70" />
        </div>
        <span className="flex-1 truncate text-center text-xs text-muted-foreground">
          design.sarj.ai/design-system/patterns/buttons
        </span>
        <div aria-hidden className="w-16" />
      </div>

      <div className="spec-grid grid grid-cols-4 overflow-hidden rounded-2xl bg-background">
        {BUTTON_SIZES.map((size) =>
          BUTTON_ROLES.map((role) => (
            <Cell
              caption={`${role.variant} · ${size.size}`}
              key={`${size.size}-${role.variant}`}
            >
              <Button size={size.size} variant={role.variant}>
                {role.label}
              </Button>
            </Cell>
          )),
        )}

        {BUTTON_ROLES.map((role) => {
          const Glyph = ROLE_ICON[role.variant] ?? PreviewIcon
          return (
            <Cell
              caption={`${role.variant} · icon`}
              key={`icon-${role.variant}`}
            >
              <div className="flex items-center gap-2">
                {ICON_SIZES.map((size) => (
                  <Button
                    aria-label={`${role.label}, ${size}`}
                    key={size}
                    size={size}
                    variant={role.variant}
                  >
                    <Glyph />
                  </Button>
                ))}
              </div>
            </Cell>
          )
        })}
      </div>
    </article>
  )
}

function Cell({
  caption,
  children,
}: {
  caption: string
  children: React.ReactNode
}) {
  return (
    <div className="spec-cell relative flex flex-col items-center justify-center gap-4 px-3 pt-8 pb-5">
      <div className="flex h-10 items-center">{children}</div>
      <span className="text-xs text-muted-foreground">{caption}</span>
    </div>
  )
}
