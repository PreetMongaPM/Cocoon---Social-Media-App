import ProfilePhoto from "../HomePage/ProfilePhoto";
const ProfileInfo = ()=>{
    return (
        <div className="profile-info">
            <div className="profile-page-photo">
            <ProfilePhoto/>
            </div>
            <div className="name-count">
                <div className="name">Preet Monga</div>
                <div className="count">
                    <div>
                        <div>
                            999
                        </div>
                        <div>
                            posts
                        </div>
                    </div>
                    <div>
                        <div>
                            999
                        </div>
                        <div>
                            followers
                        </div>
                    </div>
                    <div>
                        <div>
                            999
                        </div>
                        <div>
                            following
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;