class arcCaptions{
    constructor(){
        
    }
    captions = {};
    add($name, $captions = {}){
        if($name != undefined){
            this.captions[$name] = $captions;
        }else{
            return "WARNING: Can not add caption [" + $name + "], this caption alrady is exists.";
        }
    }
    getCaption_ar($name){
        if(this.captions[$name] != undefined){
            return this.captions[$name]['ar'];
        }else{
            console.error('Caption [' + $name + '] not found');
        }
    }
    getCaption_en($name){
        if(this.captions[$name] != undefined){
            return this.captions[$name]['en'];
        }
        else{
            console.error('Caption [' + $name + '] not found');
        }
    }
    getCaption($name){
        if(this.captions[$name] != undefined){
            return this.captions[$name][$_lang];
        }
        else{
            console.error('Caption [' + $name + '] not found');
        }
    }
}

var $arc_captions = new arcCaptions();

$arc_captions.add('user', {ar:'مستخدم',en:'User'})
$arc_captions.add('country', {ar:'البلد',en:'Country'})
$arc_captions.add('city', {ar:'المدينة',en:'City'})
$arc_captions.add('province', {ar:'المنطقة',en:'Province'})
$arc_captions.add('region', {ar:'الإقليم',en:'Region'})
$arc_captions.add('canceled', {ar:'ملغية',en:'Canceled'})
$arc_captions.add('done', {ar:'منتهية',en:'Done'})
$arc_captions.add('waiting_for_details', {ar:'بانتظار المعلومات',en:'Waiting For Details'})
$arc_captions.add('pinding', {ar:'في مرحلة التسليم',en:'Pinding'})
$arc_captions.add('count', {ar:'الكمية',en:'Count'})
$arc_captions.add('date_time', {ar:'التاريخ والوقت',en:'date_time'})
$arc_captions.add('our_services', {ar:'خدماتنا',en:'Our Services'})
$arc_captions.add('service', {ar:'الخدمة',en:'Service'})
$arc_captions.add('price', {ar:'السعر',en:'Price'})
$arc_captions.add('days_to_finish', {ar:'موعد التسليم',en:'Delevery Time'})
$arc_captions.add('image', {ar:'الصورة',en:'Image'})
$arc_captions.add('images', {ar:'الصور',en:'Images'})
$arc_captions.add('sub_category', {ar:'الصنف الفرعي',en:'Sub Category'})
$arc_captions.add('category', {ar:'الصنف',en:'Category'})
$arc_captions.add('categories', {ar:'الأصناف',en:'Categories'})
$arc_captions.add('description', {ar:'الوصف',en:'Description'})
$arc_captions.add('description_ar', {ar:'الوصف (ع)',en:'Description (Ar)'})
$arc_captions.add('description_en', {ar:'الوصف (En)',en:'Description (En)'})
$arc_captions.add('sender', {ar:'المرسل',en:'Sender'})
$arc_captions.add('evaluation', {ar:'تقييم',en:'Evaluation'})
$arc_captions.add('customer', {ar:'عميل',en:'Customer'})
$arc_captions.add('biography', {ar:'نبذة تعريفية',en:'Biography'})
$arc_captions.add('status', {ar:'الحالة',en:'Status'})
$arc_captions.add('last_seen', {ar:'آخر ظهور',en:'Last Seen'})
$arc_captions.add('response_speed', {ar:'متوسط سرعة الرد',en:'Average Response Speed'})
$arc_captions.add('password', {ar:'كلمة المرور',en:'Password'})
$arc_captions.add('email', {ar:'البريد الإلكتروني',en:'Email'})
$arc_captions.add('mail', {ar:'البريد الإلكتروني',en:'Email'})
$arc_captions.add('middle_name', {ar:'اسم الأب',en:'Middle Name'})
$arc_captions.add('last_name', {ar:'العائلة',en:'Last Name'})
$arc_captions.add('first_name', {ar:'الإسم الأول',en:'First Name'})
$arc_captions.add('mobile_number', {ar:'رقم الموبايل',en:'Mobile Number'})
$arc_captions.add('phone_number', {ar:'رقم الهاتف',en:'Phone Number'})
$arc_captions.add('phone', {ar:'رقم الهاتف',en:'Phone Number'})
$arc_captions.add('mobile', {ar:'رقم الموبايل',en:'Mobile'})
$arc_captions.add('avatar', {ar:'الصورة',en:'Avatar'})
$arc_captions.add('img', {ar:'الصورة',en:'Image'})
$arc_captions.add('address', {ar:'العنوان',en:'Address'})
$arc_captions.add('nationality_en', {ar:'الجنسية (En)',en:'Nationality (En)'})
$arc_captions.add('nationality_ar', {ar:'الجنسية (ع)',en:'Nationality (Ar)'})
$arc_captions.add('nationality', {ar:'الجنسية',en:'Nationality'})
$arc_captions.add('calling_code', {ar:'النداء',en:'Calling Code'})
$arc_captions.add('name_en', {ar:'الاسم (En)',en:'Name (En)'})
$arc_captions.add('name_ar', {ar:'الاسم (ع)',en:'Name (Ar)'})
$arc_captions.add('name', {ar:'الاسم',en:'Name'})
$arc_captions.add('myfile', {ar:'ملفي الشخصي',en:'My File'})
$arc_captions.add('changePassword', {ar:'تغيير كلمة المرور',en:'Change Password'})
$arc_captions.add('subCategory', {ar:'صنف فرعي',en:'Sub Category'})
$arc_captions.add('time_to_finish', {ar:'وقت التسليم',en:'Delevery Time'})
$arc_captions.add('notifications', {ar:'الإشعارات',en:'Notifications'})
$arc_captions.add('notification', {ar:'الإشعار',en:'Notification'})
$arc_captions.add('messages', {ar:'الرسائل',en:'Messages'})
$arc_captions.add('message', {ar:'الرسالة',en:'Message'})
$arc_captions.add('receiver', {ar:'المستقبل',en:'Receiver'})
$arc_captions.add('setting', {ar:'إعدادات',en:'Settings'})
$arc_captions.add('portfolio', {ar:'أعمالنا',en:'Portfolio'})
$arc_captions.add('contact_us_item', {ar:'اتصل بنا',en:'Contact us'})
$arc_captions.add('contact_us', {ar:'اتصل بنا',en:'Contact us'})
$arc_captions.add('type', {ar:'النوع',en:'Type'})
$arc_captions.add('value', {ar:'القيمة',en:'Value'})
$arc_captions.add('category_id', {ar:'الصنف',en:'Category'})
$arc_captions.add('icon', {ar:'الأيقونة',en:'Icon'})
$arc_captions.add('url', {ar:'العنوان',en:'URL'})
$arc_captions.add('background_color', {ar:'لون الخلفية',en:'Background Color'})
$arc_captions.add('color', {ar:'اللون',en:'Color'})
$arc_captions.add('social_item', {ar:'سوشال',en:'Social'})
$arc_captions.add('controls', {ar:'تحكم',en:'Controls'})
$arc_captions.add('search', {ar:'بحث',en:'Search'})
$arc_captions.add('add', {ar:'إضافة',en:'Add'})
$arc_captions.add('delete', {ar:'حذف',en:'Delete'})
$arc_captions.add('update', {ar:'تعديل',en:'Update'})
$arc_captions.add('save', {ar:'حفظ',en:'Save'})
$arc_captions.add('can_not_delete', {ar:'لا يمكن حذف هذا العنصر',en:'Can not delete this element.'})

$arc_captions.add('about_the_company', {ar: 'نبذة عن الشركة', en: 'About the company'});
$arc_captions.add('our_vision', {ar: 'رؤيتنا', en: 'Our vision'});
$arc_captions.add('our_message', {ar: 'رسالتنا', en: 'Our message'});
$arc_captions.add('objectives', {ar: 'أهدافنا', en: 'Our objectives'});
$arc_captions.add('chairmans_word', {ar: 'كلمة رئيس مجلس الإدارة', en: "Charman's word"});
$arc_captions.add('finally_word', {ar: 'الكلمة الختامية', en: 'Finally Word'});
$arc_captions.add('client', {ar: 'عميل', en: 'Client'});
$arc_captions.add('our_clients', {ar: 'عملاؤنا', en: 'Our Clients'});