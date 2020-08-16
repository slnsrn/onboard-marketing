import { FiCast, FiVideo } from "react-icons/fi";
import { FaLaptop } from "react-icons/fa";
import {GiPalmTree, GiMailbox, GiTabletopPlayers, GiDesk} from 'react-icons/gi'

const ServiceList = [
    {
        icon: <GiDesk />,
        title: 'Ofis Reservasyonu',
        description: 'Pandemi döneminde ofiste bulunan kişileri ve çalışma saatlerini kolayca düzenler.'
    },
    {
        icon: <GiMailbox />,
        title: 'Kargo Takibi',
        description: 'Ofise gelen evrak ve kargoların düzenli bir şekilde takip edilmesini sağlar.'
    },
    {
        icon: <GiTabletopPlayers />,
        title: 'Toplantı Odası Yönetimi',
        description: 'Toplantı odalarının daha etkili bir şekilde kullanılabilmesi için gerekli kayıtları tutar.'
    },
    {
        icon: <FaLaptop />,
        title: 'Demirbaş Takibi',
        description: 'Çalışan kendisine zimmetli demişrbaşı online imza ile devralır, takibi kolaylaşır.'
    },
    {
        icon: <FiVideo />,
        title: 'Görüntülü Görüşme',
        description: 'Toplantılarınıza anlık görüntülü görüşme oluşturarak kolayca bağlanabilirsiniz.'
    },
    {
        icon: <GiPalmTree />,
        title: 'İzin Talebi Yönetimi',
        description: 'Çalışanlarınız izin taleplerini onaya iletebilir, kalan izin günlerini takip edebilir.'
    }
]


const Services = () => {
    return (
        <div className="flex flex-wrap">
            {ServiceList.map((val, i) => (
                <div className={`w-full sm:w-1/2 lg:w-1/3 px-4`} key={i}>
                    <div className="service service__style--2">
                        <div className="icon">
                            {val.icon}
                        </div>
                        <div className="content">
                            <h3 className="title">{val.title}</h3>
                            <p>{val.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Services
