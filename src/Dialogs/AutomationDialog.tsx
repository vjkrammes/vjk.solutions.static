import DialogBase from "./DialogBase";

type Props = {
  onClose: () => void;
};

export default function AutomationDialog({ onClose }: Props) {
  const title = "Automation";
  const content = () => {
    return (
      <p>
        Using Azure functions, perform event-driven tasks without human
        intervention. Tasks can be triggered by a timer, HTTP requests, or on a
        completely ad-hoc basis. Simple tasks can be completed within the
        function itself, or for more complex requirements can be used to trigger
        an action on an API web site.
      </p>
    );
  };
  return <DialogBase title={title} content={content()} onClose={onClose} />;
}
