import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


export default class Chats extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    chatCards(){
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CahtOpenScreen')}>
            <View style={{padding: 15, borderStyle:'solid',  borderColor:'black', elevation: 1}}>
            <View style={{flexDirection: 'row',height: 60, width: '100%'}}>
                <View style={{flex: 1}}>
                <Image
                 style={{width: 65, height: 65, borderRadius: 100}}
                 source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFhUXFRUVGBUYFRcVFRIVFRUWFhUVGBcYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0rLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABEEAABAwIDBAYGCQIEBgMAAAABAAIRAwQSITEFQVFhBhMicYGRBzKhscHwFCMzQlJicoLRsuEVQ5LxJFNzs8LSFqLD/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EACwRAAICAQMDBAAFBQAAAAAAAAABAgMRBBIhBTFBEyIyURQVYXGBI0KRobH/2gAMAwEAAhEDEQA/AOM40MaZxI5VMD9w4XIpSCURKMEbmOh6PGmJRgowCkPtcjc5MgoSowW3jmJJxJBKftbZ1Qw0T7gjCREcyeENFyKVo6WxKYaC5xJz0Ov8KRSoURHYHs9qS9RFduTrV9FulzJpGTKQts80z91vkITNWwpumWjvbl7lVapeUMn0Cz+yaZj0FpH7AaQcLzO4FVl1suowTEjiE+N0Jdmc6/puppWZR4/QrUEbkRTDA1gJBBBSQBBBBAAQQQQAESCCAAggggAII0EALQSoQhVGCUErChCCcCUErChCCMBII4R02EmBvQCWR61ty9waP9uavaLG0hDYLpAGes7z5+xMW1LqhBidT/CYqXwY+cIcDEh248juSd26WPB0LqJUabdH5v8A0iZc3pJMgTOcZAniFGdWKsrQUKxLpI0lp1HdxCl1dkUjm1xjeMvYs9jhCWGdbp6v1NEZJ89sFB15Uu3vOKc2js7C3E3QahVHWKUozWUMnZbpp4kX9GvO9S8emem9Z23u4Ks6FzO7xSZ1NHR02uhNYYu72bTqCTkeI1/uqG52RUachiHLXxWma4HIO8OHijDM8iMt496tC+UOBeq6XRqXuSw/tGHeyEhbraViyo2HDP8AEPestfbLfTOYlv4hotlV8Znmtd0m3SvPeP2iuQSikp5yQIIIIACJGiQAEaJGgAIIIIAfhCEqEIS8j8BQhCVhRwjJbaIhCEuERCMkNCCrXZtuGjGT2jpy5quY2THHJW7DrlEDCEuxvGDdoK057n4G6tTPnn3JirQNQTImYhShTBBnWP8AZIoZfOqWnjt3OjZXveJdmVwL6TgQSDxV/szagMTkm3UG1Bn7O5Qv8LqNksOQj3olKFkcS4YumjUaK1WU+6L7/safrGkQcwdVlNpMDKhaNMo7irmiHgdoQY81W3VlVc7EWOzOXcI8krTra3l8G7q83bCDjF7s/XggvCOnVI0Um4tSNQopaVoTUkcmcJ1yz2LW2vxEKwbcYhHz/dZtrTrCmUbg7ykTpXdHU0vUJr2zL99Xshre8/O5CiZGYkQR59+qg21zxUptRu7hn/KzOLTO3XbGxFLtnZYb9YzQ5xwVG5b2nmIIEcdfONQqPbexwBjp+LeA4hbKNRn2yPN9V6Q45upXHlGcKCW8RkUhbTzTWAIIIIIAggggAI0EEAS4RwgglGsASoRBGoJCKSUooMYSYaCSdABMnhkpRDQq3bnPDNS6VaWlp4yt5d+jenTosLalR1UiXeqG6SQBEiO9TNm9BrUND34nSAYJ5TBiFd0SkaaLlWjndJ8Zag70pwAcSM112h0TsCBNFo3fegzxzSn9BLEAjqzJIM43GAeGeih6Ofg1LXV49xyOjXw7t/kpdG7EFdLq+j20/C7/AFP/AJUCr6OaUy2q8Tu7J9sJctFNmmrqkI8ZMRSu5MERvH8JxlXeI7lrqno0d9yvHewH3EJVX0ZVAOzcDniZ/BSXobPo2w6xV/czJvqDUtGneEyabTlhGm8fFa+t6OLoAYa1Nw4kOb/MpNn0Au5IL6bRG4l05jSQFT8LavA78x00+ZNGYDG6bvnzTJtaZJGHXlmF0qj6NH4O1cgP4YJA4DUSqPaHo7v2Elop1B+VxDj4OAjzVXp7o+CV1DRTe3K/lGFuLIsPZzCFCrwOfkt5R6AX1SMTWMB1xOk58myk7R9F9y2X06rHnKGYS2RxxEwrxqskuUZrdVpqprZJft9GUFTnnyTpeYz9qb2nY1beoaVQAPGcNcHR5adxSadeQFmlBrudem+NiKfbmzpmo3lP8+xUBW7ezLWRv9yym1bPq3cjmFt01uVtZ5jrfT1XL1oLh9yuQUu12ZWqgupUqlQDIllNzwDwJaMkxUouaSHAgjUEEEd4K1nnRtBAokAGggggCailJlCUrBo3CwUcpuUUowTvHCVtvRNQP0p9XC6KbILg5oDce5wOZmDppCwsro/o7IZbVKoObqgaROTcIkdmNc+J1TK45kQ3k199tctcW5TnH4eJM7+CYtdo4oAETrlr/KqL2cWMkanXfx5p6yfhOIjLyz3ALanyM2LBq6FQZAgE6x3a+Kn0iJgQRlv04lUlC8GREmI4ToR4qyo3AccoDpiMswc55K2RMky0Y4AHJJrEEfMKPRqSAe7P4FOvDtdZ0j+DvUi8C6BEwcx3x5KROcHzUFoO8+yE4w8wfGAgGSy7hMeaiurQeSNpgZ/yolzWAJlp5cUAkXFvfDep9O6buhZVlXs6HL80FNiu8ZmY4qrSZLizXPrg81ErVR3qjo3xIg6cx8QltdiyzHxUYIUTmfpJqtNeG0OrLci/CQKpgEwT60cVmLWrI5LdekXZ+JmOWYm5yRDoGcB0rnlB5HiuTqoe9nqem6jEUsmg2bZVK7wyiJcdRoGjSTwC6h0f6A2tJuKuxlepxc2WN/SwzCofRxbNZR67LG8nPg0GAPefFbZl3HNatJpIxipPuYur9RnY3VH4lpZ29KmMNJjGN/C1oaPIKFt/o3a3jHMr0WOLh68APBGhDhnIkpuneE6KdQrLbKrg8/k809OehlbZ9UtcC6kYLKsdlwdMAnc4AZrKlevdtbNo3dF9Cs2WPBB4jgRwIXlLbuzX21xVoP8AWpvLe8D1XZcRB8VlnHBKZXoIIKhJIlCUSEquC2Q5RSilFKAyKldB6N31MWLWNDgQ52LTN5zkcoIXPJWr6O1cVFrB917jnAGYnXhClPDyMq5kaijXbMjtAxM55T/ZT6dUEAgHRwA4Diqota0YdTk4x+aPLuU2zzl0wJJA1ECDHPUJ8Zo0skiQ4AHXUq3tCQNcvxbhu1VL1jcMuJGs944J+jeeqBkDl3jf5z7VfeislkvrSv2iMnTrp5z8VYNqnuHCT8grNtrNyaeMA/eA58QnxcwYOeZ36eO8K3qIW4ZNHUqDIazzzEcwksq4R8lVFEtGczvgCRBUnG0gat7ohG9FNpa03Y8gfnuSjTMwT2vY7UgqtoV8OQJEaFWNQhzZJmQDGkGdZ81O9ENYIzgQcxru3HPMdygVLA6jFyBJy+fBW8AaEEcCYKWy5aci4fOijcg58FfZWr2wSTG8AfBTzQbrn3/2RisASCIO4jQ+WijVbwtcQTl85ghQ7EgSbZR9NqBfTLcOUGSCeHJcPtr4tMGS32juXduku2aVGi6uYdhAlkGHuOQExlPNcBvqzX1Hva3A1znODAZDATIaDyWOWJybH+rKtJrg7t0Yqn6NSIENLGlo4CNFciqubeijbgIdZ1HZyX0pJ0zxsHvA5uXRKrC3cqR1XpS2yCf9X3E+2qDgpjbkBZx9cgZJt20CFvhqYS8md0s11O7mYK80dOLhlS/uHsBg1HDPe4HC4+YK6rt7pey2pmc3lpwN34oyJ4AHeuK1QSSeJlKumpPgrtwR8KCd6soJJAmUESIoAMokEEABXXR6sTiYXQ0drzyMexUqkWNxgdPgVEu3BetpSWTWl7mkw6c9eKeo372xB0lRLKiagBgifkK5tNlTrprwA5rmz1Li8HVVcMZK++v3u7WgjPhoolPbVQgBjHOgyCPVI4Z9y1mw+jouYrVB9VrSZ+Mbqr+M6gcIK1VPo3T/AAhbIRljMu5jsujnEexzAdIqzO0+mQBqdfcclds6QmoGuDZEccjGUjnlHgts3o3SIyDSOUHwWd2XsFlG8uLSOzgZcUxva18se3uDhl3pepnKFTmvBamyDniQiht0QMiCDHPCf4+KfdtZuR17hHgeHerZ3RumdyDejTOfmVxX1c2+nSR6G12uyc0jg7XulSbbbIIIAOmoOifodG28CVOpdGaW9qr+cyXYpKqornXry2I0O6EhtecseE8xv5rRUej1EfdUv/B6X4R5Kfzix9kLcKzI1mVfxeO72qKS85OOXCdO9bZ2x2AGJ0UKvshgggKbOrvHYIwiZrpH0dr3Gz6jbcy/Ilm+o1plzWn8WWS4PVaQSCIIMEHIg7wRuXquxODJc49MHQcOa7aFs0SBNdgGoH+cOY+8OGe4rV0zqCseyfnsZdRW85RxqnUIIIJBGhBggrZbL9I95TAa8tqt07Y7Q/c2J8Vi3CCjauzOuM1iSyZoycex1O29JNBzYqUXtdH3SC0nxIIUa76cU3A9VRcHbsREd5hc8pBWFuxZ/wAPCL4HK2TH764fWeXvMn+NI4Jh1srCjSCeq0skzIYzyUnUFBWOBBTkrtM7KCJGmigIIIkAGrfo3so1qmnZbBPPgPngqkBdW6JbI6mg2R2iDUd3kZDwEDwWXWX+jXny+w6iG6YLO1AUralI9SWDI1H06M8OtqNYT5OT9rSzTu2G4WU3bm3Nq49wuKcrz+nnv1EE/tHRt+DNg0U6NIveQynTZJOga1oXIL/a95tq5+j28tpdoiniwMFMEDrKpGpzHHWADqdl6Y9oGlZNog/bVAD+imMZ8zgXLuhfSqps6u6sxjX4mFjmOJAcMQdkRoZavV4OQ2Xl/sm92FXo1RUa5rycmFwZUDYL6T2kcCM/Hcuj0LhlbatOrTzY/ZbKgMfdfcFzAeBiclyDpp0wrbRqNdUa1jaYIZTbJADokknVxgLqHo4aXPLjpTsrGgDz6s13Dw61qx9Qklppv9C9PzRuBSSmUk4ET34ROZ5ASe5eHjHLwdPPA4ymE81oVFcbTus+qsnO4Y61Jk92EuPnCrau3NrN02Wx36bxhPhLRK316Ob8r/KEymjaAI1z8+knqXBt7Y3Nv+eBUp/6hE+ErW7G27bXTcdvWbUGUgGHNnc5p7TT3hMnpba1lrgrvTLFxUd7eyRwPvUhwTDssXmsc0MTIwUm3eCIOhkEHQg8t6iko2HNKrm4vKLSWUcB9J/RP6BdHAPqKsvpflz7VP8AbI8CFjgvTvTro82/sqlKB1je3SO8VGjIdzs2n9S8yVBBIIg6EHIg717XQ6n16svuu5zrIbWO0irG3cqthUyjUWpgi6oFOVXZKvpVUupWS8DfA5KCh9ejRggpUEEE4QBGiRoAs+jln11zSZuxYnfpb2j7o8V2djOwfzEN8syuY+jqj9dUefusgfuOfu9q6gXZMA3AnxP+y891ixuxQXg3aWPtyKt7cBObV2d11vUpAwXMIB4OjsnzhLoSVPpLhxtcLFL6NbWVgwPpIrOutn2N1GheyqM/q6hbhcD+6m5vfHFcrqUyMoXbL1gt33FGpa1rm0uh1mCk3E6lW0fvGEO7LgZycFia/RtofkzaLaU6GyFSoB3tqgHvIHcve6fVUW1ptnGnXKLwUnRjYX0iuyk7Jvr1Hf8AKoMGKrUJGmWQHEjku0+jyj/wprkFpuKtS4wnVrXuimO7A1kd6y3X2LbU7P2eKgr3NSnSrGo0suOrLiajziEEAAjC3Ltk8SukWlEMY1jRDWgNA4NaIA8oXF67fGNarj5/4aNNBt5JIKUCmpRyvKm4fa5OBRgU4HJikVaHHsa4FrgCDqCAQe8HVZO+9H9Hrm3NlUdZ1mnM086bhvBpnIdwy4harEjxLVTqrKvixcoKRKxJojM9xTZqpsVc3d0JU5plkhJakwlBySSswwlW7ty89elrYv0baFUtEMrRWb3vJxgfuBP7gvQNErmnp6sA6hb3EZsqGmT+V4ke1ntXd6Nftu2+GZL48HFgU6xyYKUCvTsypk5lZB9ZQsaGJV2k7h/rEaj4kEYDcEglYUYarFRCEJwNSg1RklI2HQHJtQ8XAeQH8roVrUE5nOB7lzfos/DTP6j7gtPa3JxgzkR7oC871Ctzskzp0R9qNex6kU3Knt7mVYUqy4U4tGhos6b1JYVUVqzwxxpgF8EtB0J3A8lmdl+ki3JwXLX0KgOEgjE0EZHMZjxCdVpLbYuVazjx5EznGLwzfuYCQSBImDGYkQYKclVVhtihWE0q1N4/K4H2blPFRKnCxcST/khY8DoKXKZxJqtf02CX1GNHFzgB7SojVOXZA2kTQUYKxu1PSTs+jIFQ1XDdTaXAn9RhvtWK2x6VLqqSy2pikDkDHWVDOQicgfAroUdK1FnLWF+oqd8Edox/PxSg5ZboRsapQo47h7n3FWHVHPJcWbxSBOgbOe6SeS0Qcsl9ca7HGLzjyWi8rI693BR8es7z7k8HKNV08ykyGIX1iUHqIltcllsE6i9Zf0u0sey635XUnDwe0f8AkVoKb1SekV07Muv+mP62rd0+TWoh+4i5e1nnIoBG4Il7hnODQQQUABBBBAEzqkYpK9+goCxSvUHemUYpFLFJXP0JAWajcWUQbGMNI5+8K8t3yOYzHPiFVMpYVLtqsGQubqI+5s30v2mlsLnIQra3qLL2VSHYZyiR3cFdUKq42oqwzQXtF6xvT7ol1s3NBs1I7bB/mR94fm9/v0tGqrCjUBStPqJ6axTj/Ii6tTWGeeXgg7wQe4gj3FWey72uXYfpFVojdVeJ5arqnSboTb3Uvb9VV/GB2XfraNe8Zrn21OhF7R9WkajdzqRxc/V9b2L1NOup1EeHh/qc/wBN1yy1lBVWVXZfSa+HeDVeZ9qhX1gwMLi5xI0xGZ5JJoXoyNGv40nz/SpmzuiF/cH7F7R+KrLAPA9ryCYvZzKSSNll+ncWoV8v/RnhnkusejboPgLbu5bD9adM/dkfaPH4uA3anlY9EugNC1LatX62sMwY7FM/lad/M+C3E965PUeqpp10/wCTLVRzmQuUWJILkUrzxsHWuCbqOz8EQGeiROeah9gQZCac5Le5R3FUwWH2PVB6Sq0bMuOYYPOo1XDXLK+lGt/wQp731WDwbLvgFt6fHOoh+4q34nFSEWBWQsylixXtN6OftKvAiwq1NkkGzKN5G1lbhQVj9EQU7kG1mz6sI+qCZbWTvWrKjSEaQSDSS+sQxhSAzUoyDHBQadRWoeqi7GF/I5j4hJsjnkdVLHBY0DIy1GY/hWdjWcQCs9b3EKxoXWF07jryKwW15WDZFmpt6ynUqiz9vcDirGjXXMsrJZfUa+SktqKjoV1Np11ncGhUolhKUHKH1vzvR9Z88UYZXBObU+fgliqq7rksVlVxDBYdYkdamG1QiqVFXAEoXA56H3KP1nNQ6twWhx/Kd535KJRulbY8Fki2LjxRFRWXSWa4S9pDQ8HrE9Pa+OpTp7mguPe7+w9q1L64Ga55tC86yo+od5Md2g9i63S6f6m/6E2vgiMtk99GCVTqJw1F6AQMG2CadbBSTUSS5GQwRvo4RJ5GjcGCLSqqQCU5S2fGakNtlKjgMERsyluBUkWxG5KdamFYCEHFM3TcTY37k/WtnDRJtLV7tVDQFKyrBhTaFyNDopO0djufm31x/wDbgFnjVLThcCCMiDqlypyOjbjuau1uSCATPA8QrmhX5rDUb3KJ7uSs7baWUFYbtM3yaI2Jmyp3CkUrju/hZehfjipjL7msEtPgsaRlzw1S23HGFnW33Apf09L9FkGi+kIC55rPtvkf07mqOlgaOnd80826CzQuhxCcp3wVHSyMF3dVvq3x+H4hVVO4RVL0YH/od7BPwVbQvAQmQqe0mJdsrpRuCqYXabr7RDAST4cVC07bwiJEjpBtDDTLAc3Zdw3lY4vUq6u3VCSd/sCiBp4LvabTejDHkxTluYtlRLFVN4SNyS1xnRadrK5Hy9KEpvEn2OyVZRAJBHjKCrhhkk07+ZhriBvAJHfITA2qNSM5iAmWtYTMkQc/rMyYA1iI72n4pVKlTfLgWgaOBeG5ADMuIzz3LRwTuJbtrgDtj4pJ22yJJAUB9OgRh7Ls5xBxbugDfDd5GZPHcjFlT7QDW56GS7KRpLuzpvnXVGEVyyZT2zSdq+Oe5MHb9ITB/uFGfsqiJnDmCD2iS0nQgEgZd/ghbbMoNcXOaHQHDA4nORkRhJzGZGYEwp9oZkT2dJ6GUuPkfaoG1ru2rnNwBGj26/3CZOwaMgYjmdBuHfJ+fabujtID1jOR1mM+XIbxGeqFtXkh7ijqswk4XBw4j+Ell2VeP6N08oe4zplG4nOfAZZc08zopS7R66cpykGeBkEeKl7H3IW9dimpbRhSWbV5qYOjtNzey4gji5pJdv4COU+KYq9GwCAKuKeDXCPHOEuVdbGKdiA3bHNOjbI4lNUujgM/XNB3AkCcyNSfHuSf/js6P3TGRy4+sq+hWyfWs+iQ3bI4lODbIUAdHnSYqMjdJwl3cEl/R2oCQHNMa8RxyVXpqw9ef0Wbdsjkl/4yOJVW3o9Uw4gfDIefakeRRM2DUOc5cQHZRvIIBjw3I/C1k+vP6LqntsZidQR5gqBbbWgZlMno3UmA4bt84cURiwzxCXS6O1Bo8AjORBEcjizynchaatLBHrT+i1tK7356DifgN6sjZiASZ48Qs+zZ1wzI1JAjmJ5ZZq1oNuWlw6zFLQcmzM6DSRnlnCtGqMOUS5uXcl/RmjM/7oC2aSI3qLUdWJ7QkkSAMIG6IGMTrrzGWYmSykYwA4XcZGHWI7RBHt4aq+SBw2YzyUU2zdFMZTGUPbABxHE12Yz3H38k3WpzLwCMM5wN2UiTme6fgjIDTbZo1SKtNs/2Ttw+X4C+ABk6RmYyiPWHtzT1QNwB2eWri0DkRE5d/Mb0Bgg4Wo0vA3/mUv8AUgoAx+y9P3D4KytvXqfpb8EEFNnYWVFHf3lBvr+CCCs+5KDudH96ftvu93wRoKGSPD7Q/pUl2/8AQgglvuT5JY+zb/0z/UU1Z+q/v+CJBQyWLtvWHj7gnqOvl/SUEEL5Fn8RVf1R3f8AspF36re/4FGgpZCIdv63iPeplp8+xGgqzAbf9qPn8Sk19Kfcf+6ggrL4h5Jm1PXb+34qBV+z/fU96JBCJEP0qeHuCq9ofZs/Uf6giQUlfJa0vu/qH/7K8u/tf2N/pQQQyxn7b1anf8GIf5tH9FX/AMEEFYqh2r9z9n9JV1R+zreP/ccggoAhoIIK4H//2Q=='}}
                 />
                 </View>
                 <View style={{flex: 3, flexDirection: 'column', justifyContent:'space-around', alignItems: 'flex-start', overFlow: 'hidden' }}> 
                     <Text style={{fontWeight: 'bold' , fontSize: 16}}>User Name</Text>
                     <Text>Last Messege</Text>
                 </View>
                 <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end'}} >
                     <Text>Time</Text>
                 </View>
            </View>
        </View>
                 </TouchableOpacity>
        )
    }
  render(){
      return(
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
              <ScrollView> 
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
            {this.chatCards()}
</ScrollView>
       </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});