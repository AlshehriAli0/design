---
name: sarj-design-system
description: The whole Sarj design system — tokens, layers, motion, patterns, surfaces and components, plus the lint rules that enforce them. Load before writing any Sarj UI.
---

# Sarj design system

- Use the tokens, never a literal colour, size, shadow or z-index.
- Build from the shadcn primitives, never a raw button, input, select or table.
- Sentence case everywhere; never the uppercase class.
- Build only what the ticket names.

Everything here is published to the public shadcn registry; the docs site itself is private.

- This file: https://design.sarj.ai/r/design-system.json
- Install it as a Claude skill: `yarn dlx shadcn@latest add https://design.sarj.ai/r/design-system.json --cwd products/platform/apps/web`
- Each component below is its own registry item — fetch the JSON for its source, or install it with the command beside it.

## Foundations

The fixed half of the system. Nothing here is a judgement call, which is what stops the decisions further down from being re-argued.

### Rules

- **Icons** — Only HugeIcons, at one size and one style across the product.
- **Shadows** — One shared set, for elevation or separation. Never decorative.
- **Typography** — One scale of sizes, weights, line heights and heading styles.
- **Spacing** — One scale, and the same rhythm everywhere.
- **Radius** — A small fixed set of tokens.
- **Scrollbars** — One width and one token, native or ScrollArea. Never an arrow, never a track.
- **Accessibility** — Keyboard, visible focus, contrast and labels — part of the pattern, not a later pass.

### Colour

#### Surfaces

Every one is paired with its own foreground. Never mix a surface with another surface's text colour.

- `--background`: oklch(1 0 0) — The page itself.
- `--foreground`: oklch(0.145 0 0) — Default text on the page.
- `--card`: oklch(1 0 0) — Card, and anything that reads as a raised panel.
- `--card-foreground`: oklch(0.145 0 0) — Text on a card.
- `--popover`: oklch(1 0 0) — Popover, dropdown, dialog, tooltip.
- `--popover-foreground`: oklch(0.145 0 0) — Text on those.
- `--muted`: oklch(0.97 0 0) — Inset panels, table header rows, disabled fills.
- `--muted-foreground`: oklch(0.556 0 0) — Descriptions, labels, anything secondary.
- `--secondary`: oklch(0.97 0 0) — Secondary button and badge fill.
- `--secondary-foreground`: oklch(0.205 0 0) — Text on secondary.
- `--accent`: oklch(0.97 0 0) — Hover and keyboard-focus fill on rows and menu items.
- `--accent-foreground`: oklch(0.205 0 0) — Text on accent.

#### New colours

New to the palette: the brand purple and five hues to sit beside it.

- `--chart-1`: var(--primary) — The brand purple itself. Follows --primary, so a whitelabel changes it too.
- `--chart-2`: oklch(0.5 0.13 250) — Blue.
- `--chart-3`: oklch(0.66 0.08 178) — Teal.
- `--chart-4`: oklch(0.62 0.13 72) — Amber.
- `--chart-5`: oklch(0.46 0.08 350) — Plum.
- `--chart-6`: oklch(0.66 0.18 300) — Light violet.

#### Brand

Sarj purple. --primary is the whitelabel hook: change it and the ramp follows.

- `--primary`: oklch(0.334 0.107 291.8) — The one primary action, selected states, brand marks.
- `--primary-foreground`: oklch(1 0 0) — Text on primary.
- `--primary-tint`: oklch(0.948 0.019 291.8) — Selected rows and icon containers.
- `--primary-tint-foreground`: oklch(0.411 0.108 291.8) — Text and icons on the tint.
- `--primary-highlight`: color-mix(in oklch, #392868 85%, white) — Brand mixed 85% with white.
- `--primary-light`: color-mix(in oklch, #392868 70%, white) — Brand mixed 70% with white.
- `--primary-dark`: color-mix(in oklch, #392868 80%, black) — Brand mixed 80% with black.

#### Intent

Solid for a filled control, tint for a surface something is written on.

- `--destructive`: oklch(0.577 0.245 27.325) — Delete, revoke, and failure.
- `--destructive-foreground`: oklch(0.985 0 0) — Text on destructive.
- `--destructive-tint`: oklch(0.948 0.028 27.325) — Destructive badge and alert surface.
- `--destructive-tint-foreground`: oklch(0.442 0.176 27.325) — Text on the destructive tint.
- `--warning`: oklch(0.769 0.188 70.08) — Needs attention, nothing broken yet.
- `--warning-foreground`: oklch(0.28 0.07 55) — Text on warning.
- `--warning-tint`: oklch(0.955 0.055 70.08) — Warning badge and alert surface.
- `--warning-tint-foreground`: oklch(0.402 0.086 55) — Text on the warning tint.
- `--success`: oklch(0.627 0.17 149.2) — Completed, connected, live.
- `--success-foreground`: oklch(0.985 0 0) — Text on success.
- `--success-tint`: oklch(0.945 0.045 149.2) — Success badge and alert surface.
- `--success-tint-foreground`: oklch(0.402 0.098 149.2) — Text on the success tint.
- `--info`: oklch(0.54 0.15 250) — Neutral notice, no action implied.
- `--info-foreground`: oklch(0.985 0 0) — Text on info.
- `--info-tint`: oklch(0.948 0.03 250) — Info badge and alert surface.
- `--info-tint-foreground`: oklch(0.43 0.11 250) — Text on the info tint.

#### Lines

Edges and focus. There is no shadow in this system, so these carry separation.

- `--border`: oklch(0.922 0 0) — Every divider and card edge.
- `--input`: oklch(0.922 0 0) — The edge of a control.
- `--ring`: oklch(0.708 0 0) — The focus ring.

#### Sidebar

The left rail keeps its own set so the shell can differ from the page.

- `--sidebar`: oklch(0.985 0 0) — The rail.
- `--sidebar-foreground`: oklch(0.145 0 0) — Text in the rail.
- `--sidebar-primary`: oklch(0.205 0 0) — The rail's own primary.
- `--sidebar-primary-foreground`: oklch(0.985 0 0) — Text on it.
- `--sidebar-accent`: oklch(0.948 0.019 291.8) — The active nav item.
- `--sidebar-accent-foreground`: oklch(0.411 0.108 291.8) — Text on the active item.
- `--sidebar-border`: oklch(0.922 0 0) — Dividers in the rail.
- `--sidebar-ring`: oklch(0.708 0 0) — Focus in the rail.

#### Defined only as a Tailwind alias

These have no :root entry, so they are not themeable the way the rest are.

- `--tailwind-black`: #06050f — Near-black used by the marketing surfaces.
- `--manafa-blue`: #0d6efd — Manafa brand blue.
- `--manafa-light-blue`: #3d8bfd — Manafa brand blue, lighter.
- `--variable`: #0369a1 — A template variable in prompt and scenario editors.
- `--variable-background`: #e0f2fe — The chip behind one.

### Layering

Name the layer, never the number.

- `z-base` (0) — Normal flow. Everything, unless it is one of the eight below.
- `z-raised` (10) — A sticky table header, or a card that lifts under the pointer.
- `z-sticky` (20) — A page toolbar or filter bar that stays put while the list scrolls.
- `z-nav` (30) — App sidebar and top nav. Above the page, below anything over it.
- `z-overlay` (40) — The scrim behind a panel.
- `z-modal` (50) — Dialog, sheet and drawer content. 50 on purpose — it is what shadcn ships.
- `z-popover` (60) — A popover or select opened from inside a modal, which has to clear it.
- `z-toast` (70) — Toasts, which outrank the thing that produced them.
- `z-tooltip` (80) — Always on top. Nothing is ever above a tooltip.

### Control scale

- 24px — button size="xs". Inside a table row. The row height is fixed, so the control fits it rather than setting it.
- 28px — button size="sm", field Input / SelectTrigger size="sm". Cards, drawers and dense toolbars. The most common size in the app.
- 32px — button default, field Input / SelectTrigger default. Page chrome, and any control standing beside a normal field.
- 36px — button size="lg". The single action on an empty state. Bigger because nothing is next to it, not because it matters more.

### Enforced by npm run lint

- `sarj/no-raw-color` bans #hex, oklch(), rgb(), bg-purple-600, text-gray-500, colour in style. Instead: The semantic token. A literal never picks up a brand change or the whitelabel.
- `sarj/no-arbitrary-scale` bans gap-[13px], rounded-[10px], text-[0.625rem], anything under text-xs. Instead: The scale — gap-4, rounded-lg, text-xs. If the value is genuinely missing, add a token.
- `sarj/no-shadow` bans shadow-md, hover:shadow-lg, drop-shadow-*. Instead: A Card's ring, a bg-muted inset, or an overlay primitive that brings its own.
- `sarj/z-index-tokens` bans z-50, z-[9999]. Instead: One of the nine names on the Layering page.
- `sarj/use-ui-primitives` bans Raw button, input, select, table, label, kbd; a div with radius and edge and padding. Instead: The primitive. A raw element is still fine as an asChild child.
- `sarj/no-primitive-override` bans Button className="h-10 px-4 rounded-md", py-0 on a Card. Instead: A size or a variant. Margins and layout classes are always legal.
- `sarj/icon-source` bans lucide-react outside src/components/ui. Instead: HugeIcons, through the mockup's own icons.tsx.
- `sarj/motion-tokens` bans duration-500, ease-out, a raw cubic-bezier. Instead: duration-150 press, 200 popover, 200–300 dialog; ease-out-cubic or ease-in-out-cubic.
- `sarj/motion-reduce` bans A transition-* or animate-* on its own; a Skeleton without its escape. Instead: Pair it with motion-reduce:transition-none or motion-reduce:animate-none. No exception for opacity, or for a Skeleton's pulse.
- `sarj/no-layout-animation` bans transition-all, transition-[width], transition-[height]. Instead: Transform and opacity. They are the only two the browser hands to the compositor.
- `sarj/type-scale` bans font-bold, font-black, font-light, font-thin; font-serif, font-[…], fontFamily. Instead: Three weights — semibold, medium, normal — and two faces: Nunito, and font-mono for code.
- `sarj/no-scrollbar-style` bans scrollbar-*, a ::-webkit-scrollbar variant, scrollbarWidth in style. Instead: Nothing. globals.css hides every bar, and everything still scrolls.
- `sarj/icon-button-label` bans A Button size="icon*" with no aria-label and no text. Instead: aria-label naming what it does. A tooltip is a description, not a name.
- `sarj/surface-width` bans max-w-* without sm:, a width that is not one of the four, a drawer width without !. Instead: Confirm sm:max-w-sm, dialog sm:max-w-md, drawer sm:max-w-md!, record sm:max-w-5xl!.
- `sarj/one-overlay` bans A Dialog, Sheet or Drawer inside another overlay's content. Instead: Go one level deeper inside the drawer, with Back. Only a confirm or a popover stacks.
- `sarj/dialog-shape` bans Tabs, Stepper, ScrollArea or overflow-y-auto inside a dialog. Instead: A drawer for what scrolls or grows; a page for tabs and steps.
- `sarj/footer-actions` bans Done, OK, Yes, Submit, Got it; Cancel after the verb or not outline; two filled buttons; a ButtonGroup in a footer. Instead: Cancel (outline), then one verb that names the result.
- `sarj/no-header-icon` bans An icon, ItemMedia or AlertDialogMedia in a dialog, drawer or confirm header. Instead: Title, description, Close. The words are the warning.
- `sarj/destructive-variant` bans variant="destructive" on an action that destroys nothing, or in a table row. Instead: Red only for delete, remove, revoke, disconnect, discard. A row's delete is ghost with text-destructive.
- `sarj/select-position` bans A SelectContent without position="popper". Instead: position="popper", so it opens under its trigger like every popover.
- `sarj/form-labels` bans text-muted-foreground on a FieldLabel, Label or FieldLegend. Instead: Full-strength labels. The (optional) marker is the one muted span inside.
- `sarj/table-shape` bans A muted TableHead, a header band without its hover, onClick on a TableHead. Instead: DataTable, DataTableHeaderRow and DataTableHead from shared/data-table.
- `sarj/empty-state` bans An Empty with no EmptyTitle; two actions in EmptyContent. Instead: A title that is the state, and the one action that changes it.
- `sarj/shared-blocks` bans ui/pagination. Instead: ListFooter — cursor and page size under the table.
- `sarj/no-nested-card` bans A Card inside a Card. Instead: A bg-muted inset, Separator or ItemSeparator.
- `sarj/copy-conventions` bans Are you sure; Something went wrong as the message; Unavailable, N/A; Required in a label; No … found. Instead: Name the thing; name what failed; —, Not set or Not analysed; mark the minority; No API keys yet.
- `sarj/sentence-case` bans The uppercase class; Title Case in a title, label, tab, button or heading. Instead: Sentence case. Acronyms stay; proper nouns go in an expression.

## Motion

When something moves, how far, and for how long. Every rule here is one lint already fails you for.

- **Easing** — Two curves. Out for anything entering or leaving, in-out for something already on screen that moves.
- **Duration** — Six steps, and nothing over 300ms. Past that an animation stops reading as feedback and starts reading as latency.
- **What may animate** — Transform and opacity. They are the only two properties the browser hands to the compositor.
- **Reduced motion** — Every animated element carries its own escape. No exception for opacity, and none for colour.
- **Performance** — Picking the right property is most of it. The rest is not making React re-render sixty times a second.

## Patterns

The shapes to reach for first, and what each one cannot ship without.

### Creation flow

Making something new on its own screen: one question a screen, ending on a name.

Must have:

- **Step dots** — Where you are and how many screens there are. Not clickable: Back is the way back.
- **One question a screen** — A screen that asks nothing is a screen to delete. A wait has no Back.
- **Back** — Every screen after the first is leavable without losing what is in it.
- **Ends on what is made** — The last screen shows what is about to be created — its name, its preview — before Create.
- **Working state** — The primary disables and says what is happening.
- **Failure state** — On the screen that broke, with the way to retry it — never a bare toast.
- **Leaving asks** — Past the first screen, Close and Esc ask to discard; nothing is created yet.

### Buttons

- `size="xs"` — Inside a table row or a dense toolbar. 24px. The row height is fixed, so the button fits it rather than setting it.
- `size="sm"` — Beside a small field, and in most cards and drawers. 28px, the height of a sm Input or Select. The most common size in the app.
- `size="default"` — Beside a normal field, and in page chrome. 32px, the height of a default Input and SelectTrigger — which is what makes a filter bar line up.
- `size="lg"` — When it is the only thing on the surface to do. 36px. An empty state’s single action: bigger because nothing is next to it, not because it matters more.
- `variant="default"` (Save) — The one primary action on the surface. One per form, one per page.
- `variant="outline"` (Cancel) — Cancel, and anything secondary standing beside a primary.
- `variant="ghost"` (Duplicate) — Inside a row or a toolbar, where a border on every action would be noise.
- `variant="destructive"` (Delete) — Delete, remove, revoke. A soft tint rather than solid red: it confirms first, so it does not also need to shout.

### Forms

- **The label** — Above the control, text-sm font-medium, at full text-foreground. Never muted: at text-muted-foreground it clears AA by 0.04 and stops being tellable from its own description, which is the same size in the same grey. A switch or checkbox is the exception to placement — label at the start, control at the end, on one row.
- **Required and optional** — Mark the minority. A destructive asterisk on the required ones where most are optional; “(optional)” after the label where most are required. Never both in one form, and never the word “Required”.
- **Help text on a form** — One sentence under the label, above the control — never below it, and that includes the line saying why a read-only value cannot be edited. Constraints, formats, and what the choice changes elsewhere. A form is met once and answered once, so the reader gets it without asking.
- **Help text in a drawer or a dialog** — A small (i) after the label — the label's size, muted until pointed at — that opens the sentence on hover or focus. A drawer or dialog is read many times, so a line under every label turns the panel into prose. Only fields that need it get one, and a hard limit never hides there: it stays on screen as a reading beside the label (“~6s of 20s”).
- **One language per screen** — Whichever of the two a screen uses, it uses for every field on it. Both at once and the reader has to learn which sentences live where, which is a rule nobody reads a form to discover.
- **Error messages** — On the label's line, at its end, saying what to do rather than what went wrong — a few words, so it fits. It takes no height, so the box never moves: a row of fields stays in line when one goes wrong, and the form does not jump when it is submitted. Nothing sits below a control — the box is the last thing in every field. `FieldHeader` draws the line. The control's border carries the state and the label does not turn — the field's name is not the thing that is wrong, and a column of labels that changes colour is the one stable thing you were scanning to find the error. A failed submit goes to a toast.
- **Validation timing** — On submit, then live on change once a field has failed once. Nothing is marked wrong before the reader has finished typing it the first time.
- **Control width** — As wide as the longest plausible value, up to the form's own column. A three-character value in a full-width box asks for a sentence and then rejects one.
- **Placeholders** — An example of the shape, never a second label and never a constraint. It is gone by the second keystroke, so nothing the reader needs while typing can live in it.
- **Field grouping** — A group gets a legend. A bordered box with no heading is not a group — the reader is left to infer what it collects.
- **Form actions** — An end-aligned footer: Cancel as outline, then the primary. When the form is a card, the footer is the card's own CardFooter, inside the box — never a loose button under it, which reads as belonging to the page rather than to that card. The same goes for any card's own action, not only Save: Clone a voice under a voice picker sits in that card's footer band, end-aligned, never loose at the bottom of the body. A long editor swaps the footer for a bar that appears only once something is dirty.
- **Disabled and read-only** — A value that cannot be edited stays on screen, disabled, with one line saying why. Never swapped for plain text, never removed. The line is dropped when the control that turns editing on is on the same screen — a panel of dead switches under the switch that killed them needs no caption, and one that appears in only one state is a section the reader re-reads every visit.

### Tables

- **One container** — A rounded, bordered box with no padding of its own, so the header band reaches the edge instead of floating inside an inset.
- **The band stays shaded on hover** — bg-muted/50 and hover:bg-muted/50 together. Without the second, the header lights up under the pointer and reads as a row you can click.
- **Header labels are full strength** — Semibold at foreground, not muted. A column name is the thing you scan by; dimming it makes the reader work to find the one they want.
- **Rows are 40px, always** — A fixed height on 16px cell padding. Rows that grow with their content turn a scan into a read, and the header stops lining up with the body.
- **Numbers end-align, and so does their header** — Digits compare by place value, which only works when the places are in a column.
- **Never more than three controls on a row** — A word, then an icon, then the overflow. Every glyph carries an aria-label, because the glyph is the only name it has.

### Status chips

- **Completed** — `bg-success-tint text-success-tint-foreground`. Nothing is left to do, so the reader can skip the row. The cause rides inside the chip, dimmed.
- **Failed** — `bg-destructive-tint text-destructive-tint-foreground`. The row is the failure, and the only tone that should pull the eye down the column.
- **In progress** — `bg-warning-tint text-warning-tint-foreground`. Unsettled, not wrong — the same reason the cost beside it is still a dash.
- **Scheduled** — `bg-primary-tint text-primary-tint-foreground`. Deliberate, and not yet the platform's turn. Warning would read as running late.
- **inbound** — `bg-muted text-muted-foreground`. Direction is a category, not a verdict. The arrow separates the two, so colour does not have to.
- **Order status** — `bg-muted text-muted-foreground`. Same reason, and no icon — scenario names are per workspace, so no glyph fits them all.

### Empty values

- `—` — The value cannot exist for this row. Nothing is missing, so nothing is said. A dash also end-aligns with the numbers above it.
- `Not set` — It could exist, and nobody has filled it in. Worth a word, because the reader can go and set it.
- `Not analysed` — It could exist, and the system has not produced it yet. Name what has not happened, so the reader waits rather than goes looking for a fix.
- `Unavailable` — Never. It names no reason, so nobody can act on it. Every case it covers is one of the three above.

### Loading

- **The skeleton is the table** — Same column count, same 40px rows, same header band. A skeleton that does not match reflows the page the moment the data lands.
- **Follow the real shape, not the default one** — If a column is conditional on role or tab, the skeleton for that view has it. Matching only the default tab is a decision, so make it deliberately.
- **Skeletons for content, a spinner for an action** — A page that is arriving has a shape to promise. A button that is working does not, so it gets a Spinner and keeps its label.
- **Never a spinner over a whole page** — It says something is happening and nothing about what. The skeleton says both, and the page stops moving when it resolves.

### Empty state

- **One primitive** — Empty, with EmptyMedia, EmptyTitle, EmptyDescription and EmptyContent. Not a bordered div with an h3 in it.
- **Name the object, in sentence case** — “No API keys yet”. Not “No Files Yet”, not “No tasks found.” — one capitalisation and one wording across every list in the product.
- **One action, and it is the primary one** — The thing that makes the first row. size="lg", because nothing is beside it.
- **The description says what a row would be** — One line. It is the only place a reader who has never seen the feature finds out what the list is for.

### No results

- **It is not the empty state** — The collection has rows. Offering “Create your first agent” to someone whose filter is too narrow answers a question they did not ask.
- **The action clears the filter** — The reader's way out is the control they just used, and it is usually scrolled out of view by the time they read this.
- **Say what was searched for** — Name the object and quote the term, the way the state above does. It is how a reader spots the typo without scrolling back to the field.
- **It sits inside the table's container** — The header band stays. Removing it removes the columns, and with them the evidence that a filter is what is doing this.

### Errors

- **Fail at the smallest scope** — A wrong value stays on its field, a failed save is a toast, a failed request takes only the section, the rows or the page area it feeds. One request that failed never blanks the parts of the screen that loaded.
- **The sidebar and top bar always stay** — A page's error renders in the page area, inside the app, so the reader can go anywhere else. The whole window goes only when the app itself cannot start, because then there is nothing left to keep.
- **Show what did load** — Partial data beats a blank page. The failed part keeps its title, its place and its size, so the page does not jump when it loads, and the numbers next to it still read.
- **One block above the field** — Section, list, page and app all use `ErrorState`: the icon, what failed, that trying again is safe, and Try again. It draws no box; the card, the table or the page it replaces already has one.
- **Keep what the reader did** — The search, the filters, the open tab and anything typed survive the error and the retry. A failed save leaves the form as it was, so trying again sends the same thing.
- **Name what failed** — “Could not load calls”. “Something went wrong” is what a page says when nobody decided which page it was.
- **Offer the retry** — Most failures are one request that timed out. A page with no retry sends the reader to the browser's reload button and loses their filters. Try again re-runs only what failed, keeps its label and shows a spinner while it runs.
- **Never show the raw error** — A stack trace names nothing the reader can act on. If a support code is needed, it goes under the message as a code, not as the message.
- **A destructive action reports failure where it was pressed** — In the dialog, not as a toast after it closes — the reader is still deciding, and the surface they decided on is the one that has to say it did not happen.
- **Every failure is still reported** — A section that shows its error while the rest of the page works is easy to miss in monitoring. Each one reports to Sentry with where it happened, the same as a page that broke.

### Pagination

- **Cursor, not page numbers** — First, Previous and Next. A jump-to-page control over a list that is being written to is a promise the data cannot keep; First only returns to the start.
- **The page size sits beside the controls** — 10 / 25 / 50 / 100, remembered across visits. A reader who wants 100 rows wants them on every list, not on this one.
- **Under the table, inside its width** — One row: where you are ("1–10 of 12") at the start, the page size and the cursor at the end. Never above the table, and never in the page header.
- **A list either has both or neither** — Controls at a fixed size with no way to change it is the half-built version, and it is the one that gets shipped.

## Choosing a surface

### Inline

- **Sits** — In the page
- **Size** — In place
- **Use when** — Changing one value on something the page is already about, where that value is shown.
- **Avoid** — a group of settings that would push the page around, and any decision.
- **Shape** — The value turns into its control, in place; Save and Cancel sit with the field, or the page's save bar takes them; Saves on its own only for a switch or a single pick

### Popover

- **Sits** — In the page
- **Size** — Anchored
- **Use when** — Picking one or several things from a list, filtering, or a quick look at a value too long for its cell.
- **Avoid** — a form with a Save, which is a dialog, and anything read for more than a moment.
- **Shape** — Anchored to the button that opened it; A search once the list passes eight; “Create …” at its foot when the list can be empty; An outside click closes it; there is no footer

### Undo

- **Sits** — No surface
- **Size** — A toast
- **Use when** — An action that can be taken back: archive, stop and resume, set a default, remove from a list.
- **Avoid** — deleting for good, and anything that takes something live down — that is a confirm.
- **Shape** — It happens on the click; nothing asks first; A toast says what happened and offers Undo; Undo puts it back exactly, in its place in the list

### Dialog

- **Sits** — Over the page
- **Size** — 448px
- **Use when** — A short task on one screen: up to four fields, or an action that needs a few answers before it runs.
- **Avoid** — anything that scrolls, grows rows, or has tabs or steps — that is a drawer or a page.
- **Shape** — 448px, and never taller than its content; Title and Close; the body does not scroll; Cancel, then a verb that names the result; A secret shown once appears in the same dialog, after the create

### Confirm

- **Sits** — Over the page
- **Size** — 384px
- **Use when** — A decision about something that cannot be undone, or that takes something live down.
- **Avoid** — anything Undo could cover, any field beyond the name typed to confirm, and reviewing changes before a save — that is the Unsaved changes review drawer.
- **Shape** — 384px; Esc and Cancel close it, an outside click does not; The title names the thing; the body says what goes, what stops, what stays; Cancel, then the verb — red only when it destroys; Typing the name only when it is final and something live goes with it

### Drawer

- **Sits** — Beside the page
- **Size** — 448px
- **Use when** — Configuring a group of settings while the page stays in view — and creating a list item that is edited in this same drawer later, so create and edit are one form.
- **Avoid** — a quick decision, a whole object's configuration, and making a main object — that is the creation flow.
- **Shape** — 448px from the right, full height; Title and Close; only the body scrolls; Cancel and Save stay at the foot; Save is off until something changes; every exit asks before it drops them; Needs a new thing midway? One level deeper inside, with Back; Add and Edit are the same drawer; only the title and the button change

### Record

- **Sits** — Beside the page
- **Size** — 1024px
- **Use when** — Reading one record opened from a list — a call, a conversation, a file — and moving to the next without going back.
- **Avoid** — a record's settings, and anything not opened from a list.
- **Shape** — 1024px from the right; the list stays visible at the edge; ↑ and ↓ step through the list; the open record is in the URL; Actions in the header, and no footer

### Page

- **Sits** — Instead of the page
- **Size** — Full screen
- **Use when** — Configuring a whole object, or making one — a scenario, a persona, a batch — in the creation flow, which lands on its page.
- **Avoid** — a handful of settings or a list item, which is a drawer, and any quick decision.
- **Shape** — Creating in steps is the creation flow: one question a screen, full screen; Back and Close at the top, the step dots at the foot, a name and Create at the end; An object with sections is its own page, with tabs and a save bar; Leaving part-way asks first

### Rules

- **One overlay at a time** — A confirm may sit on anything, and a popover may open inside anything. Nothing else stacks: a drawer that needs a new thing goes one level deeper inside itself, with Back, and returns with it selected.
- **Header and footer stay; the body scrolls** — A footer that scrolls away hides the only way to finish. A dialog whose body needs to scroll was a drawer.
- **Four widths and the screen** — Confirm 384, dialog 448, drawer 448, record 1024, page full. Always sm:max-w-* — without the prefix the primitive's own sm:max-w-lg wins and every dialog is 512.
- **One guard on every way out** — In a drawer or a page, once something has changed, Esc, Close, Cancel and an outside click all ask the same thing: discard changes? Keep editing, or Discard. A dialog is short enough to type again, so it does not ask.
- **Cancel, then the verb** — At the trailing edge. The verb names the result — Create persona, Save, Delete webhook — never Done, OK, Yes, Submit or Got it. Save is off until something changes; Create stays on and says what is missing.
- **Ask only when it cannot be undone, or something live goes down** — Everything else happens on the click, with Undo in the toast. A confirm on every action trains people to press through the one that matters.
- **Name it, then say what happens** — “Delete Reservations?”, then what goes with it, what stops and what is kept. Never “Are you sure”, and no warning icon — the words are the warning.
- **Red is for destroying** — Only on a confirm's button, and only when pressing it destroys something. Transfer, retry and create anyway are primary.
- **Type the name only when it is final and live** — When it cannot be undone and something live goes with it: deleting an organisation, releasing a number, deleting a persona on a live number. Anything Activate or Link brings back does not ask for typing.
- **Failure stays, success leaves** — A failure is a callout inside the surface, which stays open. Success closes it and says so in a toast; a create adds View.
- **A record lives in the URL** — Opened from a list, it can be shared and reloaded, and ↑ ↓ reach the next one without closing it.
- **Picking is a popover** — Anchored to the button that asked. A dialog for one choice covers the page the choice is for.

## Components

The components the product is built from.

- **Colour** — The 44 tokens a screen is built from, and what each one is for.
  - Source: https://design.sarj.ai/r/ds-colour.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-colour.json --cwd products/platform/apps/web`
- **Index page** — A collection of one kind of object, and the four states it can be in instead of full.
  - Source: https://design.sarj.ai/r/ds-index.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-index.json --cwd products/platform/apps/web`
- **Choosing a surface** — Where a task goes — in the page, over it, beside it, or instead of it — decided by what the reader is doing and how much there is. Dry-run against every overlay in the platform.
  - Source: https://design.sarj.ai/r/ds-surfaces.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-surfaces.json --cwd products/platform/apps/web`
- **Drawer** — A panel from the side for configuring or reading one thing while the page behind stays in reach.
  - Source: https://design.sarj.ai/r/ds-drawer-anatomy.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-drawer-anatomy.json --cwd products/platform/apps/web`
- **Integration card** — A service the organisation can connect: who it is, whether it is connected, and the one thing to do next.
  - Source: https://design.sarj.ai/r/ds-integration-card.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-integration-card.json --cwd products/platform/apps/web`
- **Section card** — One block of a settings page: its title, what it is for, the one control it needs, and what it holds.
  - Source: https://design.sarj.ai/r/ds-section-card.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-section-card.json --cwd products/platform/apps/web`
- **Creation flow** — Making something new on its own screen: pick how to start, answer one question a screen, and finish on a name.
  - Source: https://design.sarj.ai/r/ds-creation-flow.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-creation-flow.json --cwd products/platform/apps/web`
- **JSON** — A value read rather than dumped: folds, Copy, and two values compared key by key with only the differences tinted.
  - Source: https://design.sarj.ai/r/ds-json-view.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-json-view.json --cwd products/platform/apps/web`
- **Alert** — Four intents, one recipe each, and every shape the platform needs — plus the alerts that should be something else.
  - Source: https://design.sarj.ai/r/ds-alert.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-alert.json --cwd products/platform/apps/web`
- **Unsaved changes** — The bar that appears once a page has edits: what changed, Discard, and a review before anything goes live.
  - Source: https://design.sarj.ai/r/ds-unsaved-changes.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-unsaved-changes.json --cwd products/platform/apps/web`
- **Developers** — Everything for building on Sarj on one page: a quickstart that places a call through the public API, then keys, webhooks and variables.
  - Source: https://design.sarj.ai/r/ds-developers.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-developers.json --cwd products/platform/apps/web`
- **Admin view** — The organisation a superadmin is reading a page as, and the control that switches it.
  - Source: https://design.sarj.ai/r/ds-admin-view.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-admin-view.json --cwd products/platform/apps/web`
- **Notifications** — A bell in the top bar with a dot for unread, opening a list where each notice leads to the thing it is about.
  - Source: https://design.sarj.ai/r/ds-notifications.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-notifications.json --cwd products/platform/apps/web`
- **Avatar** — A shader orb for anyone without a photo. The name moves the light, so the same name always gets the same orb.
  - Source: https://design.sarj.ai/r/ds-orb-avatar.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-orb-avatar.json --cwd products/platform/apps/web`
- **Recording** — The mark for a live microphone: bars that grow from the centre with the voice and fall flat when it stops.
  - Source: https://design.sarj.ai/r/ds-recording.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-recording.json --cwd products/platform/apps/web`
- **Agent states** — Listening, thinking and speaking: how a voice agent shows what it is doing, drawn three ways — dots, waves and a string.
  - Source: https://design.sarj.ai/r/ds-agent-states.json
  - Install: `yarn dlx shadcn@latest add https://design.sarj.ai/r/ds-agent-states.json --cwd products/platform/apps/web`
