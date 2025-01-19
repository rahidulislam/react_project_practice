export default function Avatar({ person, size }) {
  return (
    <>
      <h1>{person.name}</h1>
      <p>{person.imageId}</p>
      <p>{size}</p>
    </>
  );
}
