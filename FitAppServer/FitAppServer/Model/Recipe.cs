﻿namespace FitAppServer.Model
{
    public class Recipe : GenericEntity
    {
        public virtual string Title { get; set; }
        public virtual string Instructions { get; set; }
        public virtual string Image_Name { get; set; }

    }
}