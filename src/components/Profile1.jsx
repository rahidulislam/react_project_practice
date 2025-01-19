import Avatar from "./Avatar";
import Avatar1 from "./Avatar1";

export default function Profile1() {
  return (
    <>
      <Avatar
        person={{ name: "Katherine Johnsone", imageId: "1bX5QH6" }}
        size={100}
      />
      <Avatar1
        size={100}
        person={{ name: "Katherine Johnsone", imageId: "1bX5QH6" }}
      />
      <Avatar1
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
    </>
  );
}
