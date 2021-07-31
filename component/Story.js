function Story({
    img,
    username,
}) {
  return (
       <>
          <li>
            <img
              src={img}
              alt="Picture of the users"
            />
            <div>
             <p>{username}</p>
            </div>
          </li> 
      </>
  );
}

export default Story;
