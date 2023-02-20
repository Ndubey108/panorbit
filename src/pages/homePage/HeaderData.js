const HeaderData=({userprofile,openModal})=>{
    return(
        <header>
        <div className="profileinfo" onClick={openModal}>
          <img src={userprofile?.profilepicture} alt="image" />
          <p>{userprofile?.name}</p>
        </div>
      </header>
    )
}
export default HeaderData;